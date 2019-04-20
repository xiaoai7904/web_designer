<template>
  <div class="desigener">
    <div class="desigener-tools">
      <img :src="logo" alt="Web Designer">
      <div class="desigener-tools__wrap">
        <ul class="desigener-tools__ul">
          <li class="desigener-tools__ul-item">预览</li>
          <li class="desigener-tools__ul-item">发布</li>
        </ul>
      </div>
    </div>
    <div class="desigener-page">
      <div class="desigener-page__item desigener-page__center">
        <designerArea/>
      </div>
      <div class="desigener-page__item desigener-page__left">
        <el-collapse value="1">
          <el-collapse-item name="1" title="布局层级树:">
            <el-tree :data="componentList"></el-tree>
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
          <el-collapse-item name="3" title="组件列表:">
            <componentsList/>
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
  &-tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #42b983;
    padding: 0 10px;
    box-sizing: border-box;
    img {
      width: 300px;
      height: 50px;
    }
    &__wrap {
    }
    &__ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      &-item {
        padding: 5px 20px;
        border: 1px solid #42b983;
        border-radius: 10px;
        margin-left: 15px;
        font-size: 16px;
        color: #42b983;
        &:hover {
          cursor: pointer;
          background: #42b983;
          color: #fff;
        }
      }
    }
  }
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
      border-right: 2px solid #42b983;
      width: 200px;
      margin-left: -100%;
      left: -200px;
    }
    &__right {
      box-sizing: border-box;
      border-left: 2px solid #42b983;
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