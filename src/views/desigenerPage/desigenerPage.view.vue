<template>
  <div class="desigener">
    <div class="page-header-tools">
      <img :src="logo" alt="Web Designer">
      <div class="page-header-tools__wrap">
        <ul class="page-header-tools__ul">
          <li class="page-header-tools__ul-item" @click="preview">预览</li>
          <li class="page-header-tools__ul-item" @click="release">发布</li>
        </ul>
      </div>
    </div>
    <div class="desigener-page">
      <div class="desigener-page__item desigener-page__center">
        <designerArea/>
      </div>
      <div class="desigener-page__item desigener-page__left">
        <el-collapse value="1" :value="['1','2']">
          <el-collapse-item name="1" title="布局层级树:">
            <el-tree
              ref="componentTree"
              node-key="id"
              :data="componentList"
              :highlight-current="true"
            ></el-tree>
          </el-collapse-item>
          <el-collapse-item name="2" title="组件列表:">
            <componentsList/>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="desigener-page__item desigener-page__right">
        <el-collapse class="desigener-page__collapse" :value="['1','2', '3']">
          <el-collapse-item name="1" title="页面属性:">
            <pageFormView :options="pageOptions" @updateOptions="updatePageFn"/>
          </el-collapse-item>
          <el-collapse-item name="2" title="组件属性:">
            <pageFormView :options="currentPluginOptions" @updateOptions="updatePluginsPropsFn"/>
          </el-collapse-item>
          <!-- <el-collapse-item name="3" title="组件列表:">
            <componentsList/>
          </el-collapse-item> -->
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
      overflow-x: hidden;
      overflow-y: auto;
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
      overflow-y: auto;
    }
    &__center {
      width: 100%;
    }
  }
}
</style>