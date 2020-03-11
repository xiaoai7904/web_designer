<template>
  <div class="page_467f6cfc6f4227ab">
    <div
      class="xaMenu_57e27c61a13eaa56"
      style="position:absolute;width:186px;height:716px;left:0px;top:0px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(255, 255, 255, 1);background-color:#fff;"
    >
      <xaMenu :options="componentsOptions.xaMenu_57e27c61a13eaa56" />
    </div>
    <div
      class="xaTable_7c2001b312a9766e"
      style="position:absolute;width:971px;height:662px;left:186px;top:55px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(252, 252, 252, 1);background-color:#fff;"
    >
      <xaTable :options="componentsOptions.xaTable_7c2001b312a9766e" />
    </div>
    <div
      class="xaInput_d7b5110f110bd1c7"
      style="position:absolute;width:773px;height:54px;left:186px;top:1px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(255, 255, 255, 1);background-color:#fff;"
    >
      <xaInput :options="componentsOptions.xaInput_d7b5110f110bd1c7" />
    </div>
    <div
      class="xaButton_ff32f53f3c6e8b39"
      style="position:absolute;width:100px;height:55px;left:959px;top:0px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(255, 255, 255, 1);background-color:#fff;"
    >
      <xaButton :options="componentsOptions.xaButton_ff32f53f3c6e8b39" />
    </div>
    <div
      class="xaButton_f6c3113248b946a6"
      style="position:absolute;width:100px;height:55px;left:1059px;top:0px;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-width:1px;border-style:solid;border-color:rgba(254, 254, 254, 1);background-color:#fff;"
    >
      <xaButton :options="componentsOptions.xaButton_f6c3113248b946a6" />
    </div>
  </div>
</template>

<script>
/** 组件逻辑代码 */
export default {
  name: 'page467f6cfc6f4227ab',
  data() {
    return {
      componentsOptions: {
        xaMenu_57e27c61a13eaa56: { "defaultActive": "", "mode": "vertical", "backgroundColor": "#fff", "textColor": "#303133", "activeTextColor": "#409EFF", "router": false, "children": [{ "index": "1", "title": "导航1", "disabled": false, "iconClass": "el-icon-location" }, { "title": "导航2", "iconClass": "el-icon-menu", "index": "2", "children": [{ "index": "2-1", "title": "导航2-1", "disabled": false }, { "index": "2-2", "title": "导航2-2", "disabled": false }] }, { "title": "导航3", "iconClass": "el-icon-menu", "index": "3", "children": [{ "index": "3-1", "title": "导航3-1", "disabled": false }, { "index": "3-2", "title": "导航3-2", "disabled": false }] }] },
        xaTable_7c2001b312a9766e: { "data": [{ "date": "2016-05-02", "name": "王小虎", "address": "上海市普陀区金沙江路 1518 弄" }, { "date": "2016-05-04", "name": "王小虎", "address": "上海市普陀区金沙江路 1517 弄" }, { "date": "2016-05-01", "name": "王小虎", "address": "上海市普陀区金沙江路 1519 弄" }, { "date": "2016-05-03", "name": "王小虎", "address": "上海市普陀区金沙江路 1516 弄" }], "stripe": false, "border": false, "size": "small", "fit": true, "showHeader": true, "emptyText": "暂无数据", "showSummary": false, "sumText": "合计", "summaryMethod": null, "spanMethod": null, "children": [{ "prop": "date", "label": "日期" }, { "prop": "name", "label": "姓名" }, { "prop": "address", "label": "地址" }] },
        xaInput_d7b5110f110bd1c7: { "type": "text", "value": "", "size": "small", "placeholder": "输入框", "clearable": false, "disabled": false, "readonly": false, "maxlength": 200, "prefix": "", "suffix": "", "search": false, "enterButton": false, "rows": 2, "autosize": false, "number": false, "autofocus": false, "autocomplete": "off", "fontSize": 14, "fontColor": "#606266" },
        xaButton_ff32f53f3c6e8b39: { "content": "搜索", "disabled": false, "type": "primary", "round": false, "circle": false, "plain": false, "size": "small" },
        xaButton_f6c3113248b946a6: { "content": "重置", "disabled": false, "type": "success", "round": false, "circle": false, "plain": false, "size": "small" }
      }
    }
  }
}
</script>

<style>
/** 组件样式 */
.page_467f6cfc6f4227ab {
  position: relative;
  width: 1920px;
  height: 850px;
  background: #fbfbfb;
}
</style>