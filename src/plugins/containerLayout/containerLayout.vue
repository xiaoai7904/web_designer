<template>
  <div class="xa-container-layout" :style="styles">
    <grid-layout
      :layout.sync="layout"
      :col-num="options.colNum"
      :row-height="options.rowHeight"
      :is-draggable="options.isDraggable"
      :is-resizable="options.isResizeable"
      :is-mirrored="false"
      :vertical-compact="options.verticalCompact"
      :margin="[options.marginTopBottom, options.marginLeftRight]"
      :use-css-transforms="options.userCssTransforms"
      :responsive="options.responsive"
      :auto-size="options.autoSize"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :minW="1"
        :minH="1"
        @resized="resizedEvent"
      >
        <component
          :is="item.component"
          :options="item.options"
          :custom="item.custom"
          class="drag-cancel"
        ></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

export default {
  name: 'xaContainerLayout',

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data() {
    return {
      layout: []
    }
  },

  props: {
    options: Object,
    children: Array
  },

  watch: {
    children: {
      handler(newValue = [], oldValue = []) {
        let newIds = new Set(newValue.map(item => item.id))
        let oldIds = new Set(oldValue.map(item => item.id))

        let isAdd = new Set([...oldIds].filter(item => newIds.has(item))).size < newIds.size
        let isDel = new Set([...newIds].filter(item => oldIds.has(item))).size < oldIds.size

        if (isAdd || isDel || (oldIds.size === 0 && newIds.size === 1)) {
          this.createLayout(isDel)
        }
      },
      immediate: true
    }
  },

  methods: {
    createLayout(isDel) {
      let layout = []
      if (isDel) {
        let newData = new Set(this.children.map(item => item.id))
        let oldData = new Set(this.layout.map(item => item.i))

        let diff = new Set([...oldData].filter(item => !newData.has(item)))

        this.layout.forEach(item => {
          if (!~[...diff].indexOf(item.i)) {
            layout.push(item)
          }
        })
        this.layout = layout.slice()

        return false;
      }


      this.children.map((item, index) => {
        if (!~this.layout.map(item => item.i).indexOf(item.id)) {
          layout.push({
            x: index * 2,
            y: 0,
            w: 12,
            h: 2,
            i: item.id,
            component: item.key,
            options: item.props,
            custom: item.custom
          })
        }
      })

      this.layout = [...this.layout, ...layout]
    },
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      if (!!~i.indexOf('chart')) {
        let resizeItem = this.layout.find(item => item.i === i)

        let [j, len, currentIndex] = [0, this.layout.length, -1];

        for (; j < len; j++) {
          if (this.layout[j].i === i) {
            currentIndex = j;
            break;
          }
        }

        currentIndex >= 0 && this.$set(this.layout[currentIndex], 'custom', { width: newWPx, height: newHPx })
      }
    }
  },

  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%'
      }
    }
  },

}
</script>

<style lang="scss">
.xa-container-layout {
  .vue-grid-item {
    overflow: auto;
  }
  .vue-grid-item > .vue-resizable-handle {
    z-index: 1;
  }
}
</style>
