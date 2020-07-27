<template>
  <div class="desigener">
    <div class="page-header-tools">
      <img :src="logo" alt="Web Designer" />
      <div class="page-header-tools__wrap">
        <ul class="page-header-tools__ul">
          <li class="page-header-tools__ul-item" @click="save">保存</li>
          <li class="page-header-tools__ul-item" @click="preview">预览</li>
          <li class="page-header-tools__ul-item" @click="release">发布</li>
        </ul>
      </div>
    </div>
    <div class="desigener-page">
      <div class="desigener-page__item desigener-page__center">
        <designerArea />
      </div>
      <div class="desigener-page__item desigener-page__left">
        <h3 class="desigener-page__title">布局层级树:</h3>
        <div class="desigener-page-layout__wrap">
          <PageScrollbar
            ref="pageLayoutLeftScrollbar"
            :options="{scrollX: false}"
            customClassName="desigener-page-layout-left--scrollbar"
          >
            <el-tree
              ref="componentTree"
              node-key="id"
              :data="componentList"
              :highlight-current="true"
              @node-click="componentNodeClick"
            ></el-tree>
          </PageScrollbar>
        </div>
        <h3 class="desigener-page__title">组件列表:</h3>

        <div class="desigener-page-component__wrap">
          <PageScrollbar
            ref="pageComponentLeftScrollbar"
            :options="{ scrollX: false }"
            customClassName="desigener-page-component-left--scrollbar"
          >
            <div>
              <div v-for="(item,index) in Object.keys(componentData)">
                <div class="desigener-page__subtitle">{{componentTitleMap[item]}}</div>
                <componentsList :options="componentData[item]" />
              </div>
            </div>
          </PageScrollbar>
        </div>
      </div>
      <div class="desigener-page__item desigener-page__right">
        <el-collapse class="desigener-page__collapse" v-model="collapseValue" accordion>
          <el-collapse-item name="1" title="页面属性:">
            <pageFormView :options="pageOptions" @updateOptions="updatePageFn" />
          </el-collapse-item>
          <el-collapse-item name="2" title="组件属性:" class="component-props">
            <el-tabs v-model="componentTabs" @tab-click="handleClick" stretch type="border-card">
              <el-tab-pane label="基础配置" name="1">
                <div class="desigener-page-basis">
                  <PageScrollbar
                    ref="pageComponentBasisScrollbar"
                    :options="{ scrollX: false }"
                    customClassName="desigener-page-component-basis--scrollbar"
                  >
                    <div>
                      <pageFormView
                        :options="currentPluginOptions"
                        @updateOptions="updatePluginsPropsFn"
                      />
                    </div>
                  </PageScrollbar>
                </div>
              </el-tab-pane>
              <el-tab-pane label="事件配置" name="2">
                <EventSetting v-if="collapseValue === '2'" :options="currentPluginOptions" />
              </el-tab-pane>
              <el-tab-pane label="数据配置" name="3">
                <div class="desigener-page-data-setting">
                  <PageScrollbar
                    ref="pageComponentDataSettingScrollbar"
                    :options="{ scrollX: false }"
                    customClassName="desigener-page-component-data-setting--scrollbar"
                  >
                    <div>
                      <pageFormView
                        :options="dataSettingCurrentPluginOptions"
                        @updateOptions="updatePluginsPropsFn"
                      />
                    </div>
                  </PageScrollbar>
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import desigenerPage from "./desigenerPage.class"; export default desigenerPage
</script>
<style lang="scss">
.desigener {
  &-page {
    overflow: hidden;
    padding-left: 200px;
    padding-right: 300px;
    &__item {
      height: calc(100vh - 60px);
      position: relative;
      float: left;
    }
    &__left {
      box-sizing: border-box;
      border-right: 2px solid $--color-primary;
      width: 200px;
      margin-left: -100%;
      left: -200px;
      overflow: hidden;
      // overflow-x: hidden;
      // overflow-y: auto;
      .el-collapse-item__content {
        padding: 10px 0 !important;
      }
    }
    &__right {
      box-sizing: border-box;
      border-left: 2px solid $--color-primary;
      width: 300px;
      margin-left: -300px;
      right: -300px;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    &__center {
      width: 100%;
    }
    &__title {
      margin: 0;
      font-size: 13px !important;
      background: $--color-primary;
      color: #fff;
      padding: 5px 0 5px 5px;
    }
    &-layout__wrap {
      height: 200px;
      overflow-x: hidden;
      overflow-y: hidden;
      padding: 5px;
    }
    &-component__wrap {
      height: calc(100vh - 340px);
      overflow-x: hidden;
      overflow-y: hidden;
    }
    &__subtitle {
      display: inline-block;
      width: 100%;
      border-bottom: 2px solid $--color-primary;
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 10px;
      padding: 5px 5px 5px 10px;
    }
    &-basis {
      height: calc(100vh - 180px);
      padding: 0 0 10px 0;
      overflow: hidden;
    }
    &-data-setting {
      height: calc(100vh - 180px);
      padding: 0 0 10px 0;
      overflow: hidden;
    }
    .el-tree-node__children {
      .is-checked {
        background-color: #fff !important;
        color: #606266 !important;
      }
    }
    .is-checked .el-tree-node__content:hover {
      color: #606266 !important;
    }
    .el-tree--highlight-current
      .el-tree-node.is-current
      > .el-tree-node__content {
      background: transparent;
    }
    .vue-grid-item {
      outline: 1px solid #dcdee2;
    }
    .style-setting {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      .el-button {
        width: 100%;
      }
    }
  }
  .component-props {
    .el-tabs__item {
      // padding: 0 20px !important;
    }
    .el-collapse-item__content {
      padding: 0;
    }
    .el-tabs__header {
      margin: 0;
    }
    .el-tabs__content {
      padding: 10px;
    }
  }
}
</style>