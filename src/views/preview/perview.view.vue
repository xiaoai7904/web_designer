<template>
  <div class="perview">
    <div class="page-header-tools">
      <img :src="logo" alt="Web Designer">
      <div class="page-header-tools__wrap">
        <ul class="page-header-tools__ul">
          <li style="color: #757575;font-size: 14px;">
            页面尺寸:
            <span>{{page.style.w}}</span> *
            <span>{{page.style.h}}</span>
          </li>
          <li class="page-header-tools__ul-item" @click="back">返回设计器</li>
          <li class="page-header-tools__ul-item" @click="release">发布</li>
        </ul>
      </div>
    </div>
    <div class="perview-html">
        <div v-html="perviewHtml" :style="perviewHtmlStyle"></div>
    </div>
  </div>
</template>
<script>
import perview from "./perview.class";
export default perview
</script>
<style lang="scss">
.perview {
  &-html {
    width: 100%;
    height: calc(100vh - 60px);
    overflow: auto;
    .page-canvas__wrap {
      margin: 0 auto;
      width: 100% !important;
      height: 100% !important;
    }
  }

  .ruler {
    display: none;
  }
  .page-canvas__wrap {
    background-image: none;
  }
  .handle {
    display: none !important;
  }
  .page-canvas__components {
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
  .designer-content-setting {
    display: none;
  }
  .drag-handle {
    display: none;
  }
  .xa-container-layout .vue-grid-item > .vue-resizable-handle {
    display: none;
  }
}
</style>