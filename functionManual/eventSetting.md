# 事件设置功能手册

##### 组件事件配置

1.点击组件事件按钮进行配置
<br/>
<img src="../src/assets/8.png" width=400 height=300 />
<br/> 2.选择对应组件事件进行
<br/>
<img src="../src/assets/9.png" width=400 height=500 />
<br/> 3.编写对应事件处理函数
<br/>
<img src="../src/assets/6.png" width=400 height=300 />
<br/>

- 函数接受多个参数,默认第一个参数是当前组件实例对象,可以通过该参数调用组件方法和修改组件属性,

- `currentComponentInstance.$store.state.pluginsRefs`可以访问页面上面所有组件实例

- 函数支持返回`Promise`对象,可以在该函数体内进行数据请求和数据修改操作

配置的事件回调函数是在组件对应事件触发时调用

事件配置实现思路用表格组件为例展示部分代码:

```javascript
// table.vue部分代码
export default {
  mixins: [pluginsMixins],
  methods: {
    // 当某个单元格被点击时会触发该事件
    cellClickEvent(row, column, cell, event) {
      this.eventFunctionHandler('cellClick', row, column, cell, event);
    },
  },
  render(h) {
    return <el-table onCell-click={this.cellClickEvent} />;
  },
};
// pluginsMixins部分代码
export default {
  methods: {
    // 组件事件处理函数
    eventFunctionHandler(eventName, ...arg) {
      if (!eventName) return;
      // this.custom.eventListener保存了组件配置函数回调
      this.custom.eventListener[eventName] && this.custom.eventListener[eventName](this, ...arg);
      this.linkageEventFunctionHandler(eventName);
    },
  },
};
```
##### 组件自定义事件
组件事件配置支持自定义事件,选择组件事件`customEvent`，进行组件事件扩展
以图表组件为例,自定事件绑定:

```javascript
// Tips:请严格按照Javascript语法进行编写
function onCustomEventEventCallBack(currentComponentInstance, ...arg) {
  /**
   * 函数体内的单行注释会在保存的时候删除,如果需要加注释请使用多行注释
   * currentComponentInstance.$store.state.pluginsRefs 可以访问页面上所有组件实例对象
   * 支持返回Promise对象
   * @param {Object} currentComponentInstance 默认第一参数是当前组件实例对象
   * @param {Array} arg 当前事件剩余参数
   */
  // 处理图表组件点击事件
  currentComponentInstance.echartsBase.getEcharsInstance().on('click', function(params) {
    console.log(params);
  });

  // 处理图表选择图例
  currentComponentInstance.echartsBase.getEcharsInstance().on('legendselectchanged', function(params) {
    console.log(params);
  });
}
```
如果需要绑定组件原生事件，可以通过组件实例获取组件`$el`进行绑定

```javascript
// Tips:请严格按照Javascript语法进行编写
function onCustomEventEventCallBack(currentComponentInstance, ...arg) {
  /**
   * 函数体内的单行注释会在保存的时候删除,如果需要加注释请使用多行注释
   * currentComponentInstance.$store.state.pluginsRefs 可以访问页面上所有组件实例对象
   * 支持返回Promise对象
   * @param {Object} currentComponentInstance 默认第一参数是当前组件实例对象
   * @param {Array} arg 当前事件剩余参数
   */
  // 绑定组件原生点击事件
  currentComponentInstance.$el.addEventListener("click", function () {
      console.log(111111)
   }, true)
}
```
##### 组件联动事件配置

1.点击组件联动事件按钮进行配置
<br/>
<img src="../src/assets/10.png" width=400 height=300 />
<br/> 2.选择联动关系
<br/>
<img src="../src/assets/7.png" width=400 height=300 />
<br/> 3.编写对应事件处理函数
<br/>
<img src="../src/assets/6.png" width=400 height=300 />
<br/>

```javascript
// pluginsMixins联动事件处理函数代码
export default {
  methods: {
    // 联动事件处理函数
    linkageEventFunctionHandler: async function(eventName) {
      let i = -1;
      let items = Object.keys(this.custom.eventListener).filter((item) => item.indexOf(`${eventName}$$`) > -1);
      let len = items.length;
      this.linkageEventBackValueStack = [];

      while (++i < len) {
        let item = items[i];
        let levels = item.split('$$');
        let refs = this.$store.state.pluginsRefs;
        levels.shift();

        let componentId = levels[0];
        let componentEventCallbackName = levels[1];

        // 根据配置调用对应组件函数
        if (refs[componentId] && typeof refs[componentId][componentEventCallbackName] === 'function') {
          // 获取联动事件处理结果
          let result = await this.custom.eventListener[item](this);
          // 调用被联动组件处理事件函数并且把联动事件处理结果当作参数传递过去
          let backValue = refs[componentId][componentEventCallbackName](result);

          if (typeof backValue !== undefined) {
            // 执行联动事件后如果有返回值,存储当前返回值，
            // 如果下一个联动事件需要用到上一次的值可以在当前执行函数参数里面拿到当前组件实例
            // 联动函数默认第一个参数是当前组件实例对象
            this.linkageEventBackValueStack.push(backValue);
          }
        }
      }

      return this.linkageEventBackValueStack;
    },
  },
};
```

联动事件配置处理思路:

- 配置联动层级链,配置后后存储在组件`custom.eventListener`对象里面

-格式: `click$$xaInput_e26298d99bd3ac03$$getCurrentValue: 'function event() {}'`

-格式说明: `组件事件$$联动组件Id$$联动类型`

- 通过解析组件配置的联动事件,在`this.$store.state.pluginsRefs`所有组件实例对象中去执行对应联动组件联动类型函数
- 执行联动函数顺序是按照配置顺序执行,每执行一步如果函数有返回值会存储在联动事件返回值存储器`linkageEventBackValueStack`中,可以在联动事件处理函数体内通过第一个参数`currentComponentInstance.linkageEventBackValueStack`拿到上次函数返回值,也可以继续一直链式返回

> Tips: 组件事件配置和联动事件配置运行器暂时没有实现
