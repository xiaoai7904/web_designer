<template>
  <div class="page-auto-view" :style="styles">
    <grid-layout
      :layout.sync="layout"
      :col-num="24"
      :row-height="30"
      :is-draggable="isRuntime ? false : true"
      :is-resizable="isRuntime ? false : true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[5, 5]"
      :use-css-transforms="true"
      :responsive="true"
      :auto-size="true"
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
        @moved="movedEvent"
        v-contextmenu:contextmenu
      >
        <component
          :is="item.component"
          :options="item.options"
          :custom="item.custom"
          class="drag-cancel"
        ></component>
      </grid-item>
    </grid-layout>
    <v-contextmenu v-if="!isRuntime" ref="contextmenu" @contextmenu="contextmenuEvent" @hide="hideEvent">
      <v-contextmenu-item
        v-for="item in leftMenuList"
        :divider="item.isDivider"
        :key="item.id"
        @click="handleLeftMenuClick(item)"
      >{{item.label}}</v-contextmenu-item>
    </v-contextmenu>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

export default {
  name: 'PageLayoutViewAuto',

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data() {
    return {
      layout: [],
      componentsIds: [],
      leftMenuList: [{
        id: '1',
        label: '剪切'
      }, {
        id: '2',
        label: '复制'
      }, {
        id: '3',
        label: '粘贴'
      }, {
        id: 'divider1',
        isDivider: true
      }, {
        id: '4',
        label: '删除'
      }]
    }
  },
  
  props: {
    options: Object,
    children: Array,
    isRuntime: Boolean
  },

  watch: {
    children: {
      handler() {
        this.createLayout()
      },
      immediate: true,
      deep: true
    }
  },

  methods: {
    createLayout() {
      let layout = []
      let sumY = 2
      this.children.map(item => (sumY += item.custom.autoView.y))
      this.children.map((item, index) => {
        if (!this.componentsIds.includes(item.id)) {
          this.componentsIds.push(item.id)
          this.componentsIds.length > 1 && this.updatePlugin(item.id, 'custom.autoView.y', sumY)
        }

        layout.push({
          x: item.custom.autoView.x,
          y: item.custom.autoView.y,
          w: item.custom.autoView.w,
          h: item.custom.autoView.h,
          i: item.id,
          component: item.key,
          options: item.props,
          custom: item.custom
        })
      })

      this.layout = [...layout]
    },
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      let currentLayout = this.find(i)
      let autoView = Object.assign({}, currentLayout.custom.autoView, { w: newW, h: newH })
      let custom = Object.assign({}, currentLayout.custom, { width: newWPx, height: newHPx, autoView })

      this.updatePlugin(i, 'custom', custom)

    },
    movedEvent(i, newX, newY) {
      let currentLayout = this.find(i)
      let autoView = Object.assign({}, currentLayout.custom.autoView, { x: newX, y: newY, w: currentLayout.w, h: currentLayout.h })
      let custom = Object.assign({}, currentLayout.custom, { autoView })

      this.updatePlugin(i, 'custom', custom)
    },
    find(i) {
      let [j, len, currentIndex] = [0, this.layout.length, -1];

      for (; j < len; j++) {
        if (this.layout[j].i === i) {
          currentIndex = j;
          break;
        }
      }
      return this.layout[currentIndex]
    },
    updatePlugin(id, key, value) {
      this.$store.commit('updatePluginsProps', { id, modify: { id: key, value: value } })
    },
    handleLeftMenuClick(item) {
      this.$emit('leftMenuClick', item)
    },
    contextmenuEvent(vnode) {
      this.$store.commit('updateCurrentPlugins', this.children.filter(item => item.id === vnode.key))
    },
    hideEvent() {
      this.$store.commit('updateCurrentPlugins', [])
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
.page-auto-view {
  .vue-grid-item {
    overflow: auto;
  }
  .vue-grid-item > .vue-resizable-handle {
    z-index: 1;
  }
}
</style>
