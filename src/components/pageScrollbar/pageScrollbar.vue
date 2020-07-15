<template>
  <div
    class="page-scrollbar"
    :class="customClassName"
    :style="getStyle"
    ref="pageScrollbar"
    @mouseenter="showScrollBar"
    @mouseleave="hideScrollBar"
  >
    <slot></slot>
  </div>
</template>

<script>
import IScroll from 'iscroll';
import { addResizeListener, removeResizeListener } from '@/lib/resize-event';
import { throttle } from '@/modules/utils/utils';
/**
 * 滚动条组件
 */
export default {
  name: 'pageScrollbar',
  data() {
    return {
      scrollbarIns: null
    };
  },
  props: {
    // 参照 https://github.com/cubiq/iscroll文档查看详细配置项
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    // 设置滚动条容器样式
    styles: Object,
    // 自定义滚动条class 名称
    customClassName: {
      type: String,
      default: 'page-scrollbar-custom'
    }
  },
  computed: {
    getStyle() {
      if (this.styles) {
        return this.styles;
      }
    }
  },
  methods: {
    /**
     * 容器元素高度和宽度发生变化对滚动条重新计算
     */
    addScrollWrapResize() {
      let _throttle = throttle(() => {
        this.scrollbarIns && this.scrollbarIns.refresh();
      }, 300);
      addResizeListener(this.$el.firstChild, _throttle);
    },
    /**
     * 监听滚动条事件
     */
    addScrollEvent() {
      let _this = this;

      let y = document.querySelector('.' + this.customClassName + ' .iScrollVerticalScrollbar');
      let x = document.querySelector('.' + this.customClassName + ' .iScrollHorizontalScrollbar');
      let $$yy = document.querySelector('.' + this.customClassName + ' .iScrollVerticalScrollbar .iScrollIndicator');

      this.scrollbarIns.on('scrollEnd', function () {
        // y轴方向滚动到底部事件
        if (this.y === this.maxScrollY) {
          _this.$emit('scrollbottomY', _this);
        }
        // x轴方向滚动到最右侧事件
        if (this.x === this.maxScrollX) {
          _this.$emit('scrollrightX', _this);
        }
        // y轴滚动到最顶部事件
        if (this.y === 0) {
          _this.$emit('scrolltopY', _this);
        }
        // x轴滚动到最右侧事件
        if (this.x === 0) {
          _this.$emit('scrollleftX', _this);
        }
      });
      this.scrollbarIns.on('scrollStart', function () {
        if ($$yy && $$yy.style.display === 'block') {
          y && (y.style.opacity = 1);
        } else {
          y && (y.style.opacity = 0);
        }
      });
    },
    /**
     * 鼠标进入容器显示滚动条
     */
    showScrollBar() {
      let y = document.querySelector('.' + this.customClassName + ' .iScrollVerticalScrollbar');
      let x = document.querySelector('.' + this.customClassName + ' .iScrollHorizontalScrollbar');

      let $$yy = document.querySelector('.' + this.customClassName + ' .iScrollVerticalScrollbar .iScrollIndicator');

      if ($$yy && $$yy.style.display === 'block') {
        y && (y.style.opacity = 1);
      }

      // y && (y.style.opacity = 1);
      x && (x.style.opacity = 1);
    },
    /**
     * 鼠标移除容器隐藏滚动条
     */
    hideScrollBar() {
      let y = document.querySelector('.' + this.customClassName + ' .iScrollVerticalScrollbar');
      let x = document.querySelector('.' + this.customClassName + ' .iScrollHorizontalScrollbar');

      y && (y.style.opacity = 0);
      x && (x.style.opacity = 0);
    },
    /**
     * 跳转到指定dom位置
     */
    scroll2Element(el, options = { time: 300, offsetX: 0, offsetY: 0, easing: null }) {
      if (this.scrollbarIns) {
        let $el = typeof el == 'string' ? document.querySelector(el) : el;
        this.scrollbarIns.scrollToElement($el, options.time, options.offsetX, options.offsetY, options.easing);
      }
    },
    /**
     * 初始化滚动条
     */
    initScrollbar() {
      let isAndroid = !!navigator.userAgent.toLowerCase().match(/android/i);
      this.$nextTick(() => {
        this.destroyScrollbar();
        this.scrollbarIns = new IScroll(
          this.$el,
          Object.assign(
            {},
            {
              scrollbars: true,
              mouseWheel: true,
              interactiveScrollbars: true,
              shrinkScrollbars: 'scale',
              fadeScrollbars: true,
              resizeScrollbars: true,
              scrollX: true,
              scrollY: true,
              disablePointer: true,
              disableTouch: false,
              disableMouse: true,
              click: isAndroid ? true : false // 处理iscroll 默认禁用了click事件，但是在ios上面是可以使用的
            },
            this.options
          )
        );

        this.addScrollWrapResize();
        this.addScrollEvent();
      });
    },
    /**
     * 销毁滚动条
     */
    destroyScrollbar() {
      this.scrollbarIns && this.scrollbarIns.destroy();
      this.scrollbarIns = null;
    },
    /**
     * 更新滚动条
     */
    update() {
      this.scrollbarIns && this.scrollbarIns.refresh();
    }
  },
  mounted() {
    this.initScrollbar();
  },
  destroyed() {
    removeResizeListener(this.$el.firstChild);
  }
};

</script>

<style lang="scss">
.page-scrollbar {
  position: relative;
  transform: translate3d(0, 0, 0);
  // overflow-y: hidden;
  // overflow-x: auto;
  height: 100%;
  // .iScrollLoneScrollbar {
  //   // background: #725644 !important;
  // }
  .iScrollIndicator {
    background: rgba(144, 147, 153, 0.5) !important;
    border: 1px solid transparent !important;
  }
  &:hover .iScrollVerticalScrollbar {
    opacity: 1;
  }
}
</style>
