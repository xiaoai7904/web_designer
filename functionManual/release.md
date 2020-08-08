#### 代码发布思路:

- 根据设计器配置的组件，获取配置组件对应的配置文件,调用服务器接口，接口参数格式如下:

```javascript
{
  page: {
    id: 'page_0cc3894c77ed7671', // 页面id
    style: {}, // 页面样式数据
    plugins: [{
      key: 'xaInput', // 组件名
      props: {}, // 组件数据配置
    }], // 设计器配置的组件信息
  },
  terminal: 'mac' // window 设备标示
}
```

- 服务器解析参数动态生成组件代码,解析过程大致如下:

  - 下载项目基础模版(https://github.com/xiaoai7904/vue_cli_3.x/archive/master.zip) 并且解压文件到系统`runtime`文件夹下
  - 根据参数`plugins`中使用的组件(key),复制运行器中`src/plugins`对应组件包到运行器目录下
  - 根据参数生成页面代码,根据`page -> style`数据构建页面布局
  - 遍历`page -> plugins`组件数组生成如下代码(通过读写文件实现,使用了`nodejs`中的`fs`模块),具体生成过程代码请参考[运行器代码生成源码](./server/app/controller/home.js)

    ```javascript
    <template>
      <div class="page_0cc3894c77ed7671">
        <div
          class="xaInput_db58e409d2648210"
          style="position:absolute;width:200px;height:50px;left:153px;top:149px;auto-view:[object Object];padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;border-width:0px;border-style:solid;border-color:#EBEEF5;background-color:#fff;"
        >
          <xaInput
            :options="componentsOptions.xaInput_db58e409d2648210"
            :custom="componentsOptions.xaInput_db58e409d2648210.custom"
            :children="componentsOptions.xaInput_db58e409d2648210.children"
          />
        </div>
      </div>
    </template>
    <script>
    /** 组件逻辑代码 */
    export default {
      name: 'page0cc3894c77ed7671',
      data() {
        return {
          componentsOptions: {
            xaInput_db58e409d2648210: { "type": "text", "value": "", "size": "mini", "placeholder": "输入框", "clearable": false, "disabled": false, "readonly": false, "maxlength": 200, "prefix": "", "suffix": "", "search": false, "enterButton": false, "rows": 2, "autosize": false, "number": false, "autofocus": false, "autocomplete": "off", "fontSize": 14, "fontColor": "#606266", "eventListeners": {}, "children": [], "custom": { "width": 200, "height": 50, "x": 153, "y": 149, "autoView": { "x": 0, "y": 0, "w": 24, "h": 2 }, "name": "输入框", "iconname": "iconinput", "id": "xaInput_db58e409d2648210" } }
          }
        }
      }
    }
    </script>
    <style>
      /** 组件样式 */
      body {
        margin: 0;
        padding: 0;
      }
      .page_4edd98ab2c764993 {
        position: relative;
        width: 1366px;
        height: 768px;
        background: #fbfbfb;
        margin: 0 auto;
      }
    </style>
    ```

  - mac系统执行项目根目录`run.sh`脚本

    ```shell
      #!/bin/sh
      cd /Users/xiaoai/work/ui_designer/runtime/vue_cli_3.x-master
      #npm install
      npm install
      #npm run serve
      npm run serve
    ```

  - window系统执行项目根目录`run.bat`脚本

    ```shell
    ::start

    ::end
    npm install
    npm run serve
    ```

上面步骤执行完成会在项目`runtime`目录下面生成一个基于`vue cli3.x`的项目,可以修改`runtime/vue_cli_3.x-master/src/components`下面对应组件代码进行二次开发