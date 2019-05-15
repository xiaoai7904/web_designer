<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  watch: {
    'show': {
      handler(v) {
        if (!v) {
          setTimeout(() => {
            this.isDestroy = false
          }, 300)
        } else {
          this.isDestroy = true
        }
      },
      deep: true
    }
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
})
/**
 * dialog view类
 */
export default class PageDialogView extends Vue {
  show = false;
  isDestroy = false;
  loading = false;
  currentId = ''

  get srcollbarStyle() {
    return {
      maxHeight: '63vh'
    }
  }
  /**
   * 显示dialog
   */
  showDialog(id) {
    try {
      this.options.beforDialogShowCallBack().then(data => {
        $("body").css({
          overflow: "hidden"
        });
        this.show = true;
        this.currentId = id
      });
    } catch (e) {
      this.show = true;
      this.currentId = id
    }
  }
  /**
   * 确定dialog
   */
  confirmDialog() {
    this.loading = true;
    try {
      this.options
        .beforDialogHideCallBack()
        .then(data => {
          this.addData(data);
        });
    } catch (e) {
      this.addData();
    }
  }
  /**
   * 关闭dialog
   */
  cancelDialog() {
    $("body").css({
      overflow: "auto"
    });
    this.show = false;
    this.$emit("cancelDialog", this.currentId);
  }
  addData() {
    this.$emit("confirmDialog", this.currentId);
    this.loading = false;
    this.show = false;
  }
  mounted() {
  }
  /**
   * 组件渲染函数
   */
  render(h) {
    if (this.isDestroy) {
      return (
        <el-dialog
          v-dragDialog
          top="0"
          title={this.options.title || '修改'}
          custom-class="page-dialog-view el-dialog-reset-header"
          visible={this.show}
          closeOnClickModal={false}
          closeOnPressEscape={false}
          on-close={this.cancelDialog}
          append-to-body={true}
          width={this.options.width ? this.options.width : '700px'}
          ref="pageDialogView"
        >
          {this.$slots.default}
          <div slot="footer" class="dialog-footer">
            <el-button on-click={this.cancelDialog} size="mini">
              取消
            </el-button>
            <el-button
              type="primary"
              on-click={this.confirmDialog}
              size="mini"
              loading={this.loading}
            >
              确定
            </el-button>
          </div>
        </el-dialog>
      );
    }
  }
}
</script>

<style lang="scss">
.page-dialog-view {
  border-radius: 4px;
  .el-dialog__header {
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 20px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .el-dialog__body {
    max-height: 60vh;
    overflow-y: auto;
  }
  .el-dialog__footer {
    border-top: 1px solid #e8e8e8;
    padding: 10px 20px;
  }
  .el-dialog__headerbtn {
    top: 14px;
  }
  .el-select {
    width: 100%;
  }
  .is-horizontal {
    display: none;
  }
  .el-autocomplete {
    width: 100% !important;
  }
}
.page-dialog-view-mobile {
  width: 95% !important;
}
</style>

