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
    position: relative;
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