<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'

@Component()
export default class PageCanvas extends Vue {
  @Prop(Number) xw
  @Prop(Number) yw
  @Prop(Number) xh
  @Prop(Number) yh
  @Prop(String) background

  scrollX = 0
  scrollY = 0

  get wrapStyle() {
    return {
      width: this.xw + 'px',
      height: this.yw + 'px',
      backgroundColor: this.background
    }
  }
  get vrulerStyle() {
    return {
      width: this.yh + 'px',
      height: this.yw + 'px',
      top: 0,
      left: `${this.scrollY}px`
    }
  }
  get hrulerStyle() {
    return {
      width: this.xw + 'px',
      height: this.xh + 'px',
      top: `${this.scrollX}px`,
      left: 0
    }
  }
  get componentsWrapStyle() {
    return {
      top: this.xh + 'px',
      left: this.yh + 'px',
      width: `calc(100% - ${this.xh}px)`,
      height: `calc(100% - ${this.yh}px)`
    }
  }
  bindEvent() {
    let _this = this
    let scrollDom = document.querySelector('#pageCanvasContainer')
    let scrollY = 0;
    let scrollX = 0;
    let ticking = false;

    function updateRulerOffset(scrollX, scrollY) {
      _this.scrollX = scrollX
      _this.scrollY = scrollY
    }

    scrollDom.addEventListener('scroll', function (e) {
      scrollY = e.target.scrollLeft;
      scrollX = e.target.scrollTop
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateRulerOffset(scrollX, scrollY);
          ticking = false;
        });
      }
      ticking = true;
    });
  }
  showVruleLine(e) {
    console.log(e)
  }
  hideVruleLine(e) {
    console.log(e)
  }
  dragover(event) {
    this.$emit('dragover', event)
  }
  drop(event) {
    this.$emit('drop', event)
  }
  dragend(event) {
    this.$emit('dragend', event)
  }
  mounted() {
    this.bindEvent()
  }
  renderChildren(h) {
    let _this = this
    return {
      createRuler(h, height, width, key) {
        let vrulerDom = []
        let tickLabelPos = height
        let $styleFn = (data) => { return { transform: key === 'y' ? `translateY(${data}px)` : `translateX(${data}px)` } }
        while (tickLabelPos <= width) {
          if ((tickLabelPos - height) % 50 == 0) {
            vrulerDom.push(
              <div class="tickLabel" style={$styleFn(tickLabelPos)}>
                <span>{tickLabelPos - height}</span>
              </div>
            )
          } else if ((tickLabelPos - height) % 10 == 0) {
            vrulerDom.push(<div class="tickMajor" style={$styleFn(tickLabelPos)}></div>)
          } else if ((tickLabelPos - height) % 5 == 0) {
            vrulerDom.push(<div class="tickMinor" style={$styleFn(tickLabelPos)}></div>)
          }
          tickLabelPos = tickLabelPos + 5;
        }
        return vrulerDom
      },
      vruler(h) {
        return this.createRuler(h, _this.yh, _this.yw, 'y')
      },
      hruler(h) {
        return this.createRuler(h, _this.xh, _this.xw, 'x')
      },
      createVrule(h) {
        return <div class="ruler vRule" on-mousemove={e => _this.showVruleLine(e)} on-mouseleave={e => _this.hideVruleLine(e)} onstyle={_this.vrulerStyle}>{this.vruler(h)}</div>
      },
      createHrule(h) {
        return <div class="ruler hRule" style={_this.hrulerStyle}>{this.hruler(h)}</div>
      }
    }
  }
  render(h) {
    return <div class="page-canvas" id="pageCanvasContainer">
      <div class="page-canvas__wrap" style={this.wrapStyle} on-drop={($event) => this.drop($event)} on-dragover={($event) => this.dragover($event)} on-dragend={($event) => this.dragend($event)}>
        {this.renderChildren()['createVrule'](h)}
        {this.renderChildren()['createHrule'](h)}
        <div class="page-canvas__components" style={this.componentsWrapStyle}>
          {this.$slots.default}
        </div>
      </div>
    </div>
  }
}
</script>

<style lang="scss">
.page-canvas {
  width: 100%;
  height: 100%;
  overflow: auto;
  &__wrap {
    position: relative;
    background: #fbfbfb;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.5) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 0),
      linear-gradient(#ababab 1px, transparent 0),
      linear-gradient(90deg, #ababab 1px, transparent 0);
    background-size: 11px 11px, 11px 11px, 11px 11px, 11px 11px;
  }
  &__components {
    position: absolute;
    width: calc(100% - 18px);
    height: calc(100% - 18px);
  }
  .ruler {
    background: rgba(255, 255, 255, 1);
    color: #444;
    font-family: source code pro, "Arial Narrow", "Helvetica Neue", Helvetica,
      Arial, Veranda, sans-serif;
    font-size: 12px;
    line-height: 14px;
    overflow: hidden;
    transition: all 0.3s;
  }

  .ruler > div {
    background: #444;
  }

  .hRule {
    // position: absolute;
    width: 100%;
    height: 18px;
    left: 0px;
    top: 0px;
    border-bottom: 1px solid;
    z-index: 9;
  }

  .vRule {
    // position: absolute;
    /* min-height: 100%; */
    width: 18px;
    left: 0px;
    top: 0px;
    border-right: 1px solid;
    z-index: 9;
  }

  .corner {
    // position: absolute;
    top: 0px;
    left: 0px;
    width: 18px;
    height: 18px;
    border-right: 1px solid;
    border-bottom: 1px solid;
    z-index: 10;
  }

  .hRule .tickLabel {
    position: absolute;
    top: 0px;
    width: 1px;
    height: 100%;
    text-indent: 1px;
  }

  .hRule .tickMajor {
    position: absolute;
    bottom: 0px;
    width: 1px;
    height: 6px;
  }

  .hRule .tickMinor {
    position: absolute;
    bottom: 0px;
    width: 1px;
    height: 4px;
  }

  .vRule .tickLabel {
    position: absolute;
    right: 0px;
    height: 1px;
    width: 100%;
    text-indent: 1px;
  }

  .vRule .tickLabel span {
    display: block;
    position: absolute;
    top: 1px;
    right: 0px;
    margin-right: 18px;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: top right;
    -moz-transform-origin: top right;
    -ms-transform-origin: top right;
    -o-transform-origin: top right;
    transform-origin: top right;
  }

  .vRule .tickMajor {
    position: absolute;
    right: 0px;
    height: 1px;
    width: 6px;
  }

  .vRule .tickMinor {
    position: absolute;
    right: 0px;
    height: 1px;
    width: 4px;
  }
}
</style>
