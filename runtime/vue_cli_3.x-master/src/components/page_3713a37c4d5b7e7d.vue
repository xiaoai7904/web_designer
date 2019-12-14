<template>
<div class="page_3713a37c4d5b7e7d">
<div class="xaMenu_e914688928af0d0b" style="position:absolute;width:170px;height:850px;left:0px;top:0px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;border-width:0px;border-style:solid;border-color:#000;background-color:#fff;"><xaMenu :options="componentsOptions.xaMenu_e914688928af0d0b" /></div>
<div class="xaTable_41a52c8f9ca34ab7" style="position:absolute;width:1497px;height:797px;left:170px;top:27px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(217, 216, 216, 1);background-color:#fff;"><xaTable :options="componentsOptions.xaTable_41a52c8f9ca34ab7" /></div>
<div class="xaBreadcrumb_e330e35e65d6fbcc" style="position:absolute;width:1496px;height:26px;left:170px;top:1px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:0px;border-style:solid;border-color:#000;background-color:#fff;"><xaBreadcrumb :options="componentsOptions.xaBreadcrumb_e330e35e65d6fbcc" /></div>
</div>
</template>

<script>
/** 组件逻辑代码 */
export default {
name: 'page3713a37c4d5b7e7d',
data() {
return {
componentsOptions: {
xaMenu_e914688928af0d0b:{"defaultActive":"","mode":"vertical","backgroundColor":"#fff","textColor":"#303133","activeTextColor":"#409EFF","router":false,"children":[{"index":"1","title":"导航1","disabled":false,"iconClass":"el-icon-location"},{"title":"导航2","iconClass":"el-icon-menu","index":"3","children":[{"index":"2-1","title":"导航2-1","disabled":false},{"index":"2-2","title":"导航2-2","disabled":false}]},{"title":"导航3","iconClass":"el-icon-menu","index":"3","children":[{"index":"3-1","title":"导航3-1","disabled":false},{"index":"3-2","title":"导航3-2","disabled":false}]}]},
xaTable_41a52c8f9ca34ab7:{"data":[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路 1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}],"stripe":false,"border":false,"size":"small","fit":true,"showHeader":true,"emptyText":"暂无数据","showSummary":false,"sumText":"合计","summaryMethod":null,"spanMethod":null,"children":[{"prop":"date","label":"日期"},{"prop":"name","label":"姓名"},{"prop":"address","label":"地址"}]},
xaBreadcrumb_e330e35e65d6fbcc:{"separator":"/","children":[{"id":"1","label":"首页","path":""},{"id":"2","label":"活动管理","path":""}]}
}
}
}
}
</script>

<style>
/** 组件样式 */
.page_3713a37c4d5b7e7d {
position:relative;
width: 1920px;
height: 850px;
 background: #fbfbfb;
}</style>