<template>
  <div class="page-auto-view" :style="styles">
    <grid-layout
      :layout.sync="layout"
      :col-num="24"
      :row-height="30"
      :is-draggable="false"
      :is-resizable="false"
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
  name: 'PageAutoView',

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },

  data() {
    return {
      layout: [],
    }
  },

  props: {
    options: Object,
    children: Array,
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
      this.children.map((item, index) => {
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
