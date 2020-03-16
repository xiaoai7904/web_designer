/**
 * 页面管理
 */
import Observer from '@/modules/observer/observer';
import Plugins from '@/modules/plugins/plugins';
import { uuid, extend } from '@/modules/utils/utils';
let ins = null;
const DEFALUT_CONFIG = {
  style: {
    background: '#fbfbfb',
    w: 1366,
    h: 768,
    layoutStyle: '1'
  },
  options: [
    {
      label: '提示:宽度大小建议为1920,1600,1366,1440,1280',
      type: 'tips',
      hidden: false
    },
    {
      id: 'style.layoutStyle',
      label: '布局方式',
      type: 'select',
      list: [
        {
          label: '固定布局',
          value: '1'
        },
        {
          label: '自适应布局',
          value: '2'
        }
      ]
    },
    {
      id: 'style.w',
      label: '宽',
      hidden: false,
      type: 'inputNumber'
    },
    {
      id: 'style.h',
      label: '高',
      hidden: false,
      type: 'inputNumber'
    },
    {
      id: 'style.background',
      label: '背景色',
      type: 'color'
    }
  ]
};

export default class Page extends Observer {
  constructor() {
    super();
    if (!ins) {
      this.plugins = new Plugins();
      this.page = [
        {
          id: 'page_' + uuid(),
          plugins: [],
          style: Object.assign({}, DEFALUT_CONFIG.style),
          options: DEFALUT_CONFIG.options
        }
      ];
      ins = this;
    }
    return ins;
  }
  createPage(pageData) {
    this.page.push(extend(true, {}, pageData));
  }
  findPage(pageId, cb) {
    let i = 0;
    while (true) {
      if (this.page[i].id === pageId) {
        cb(this.page[i]);
        break;
      }
      i++;
    }
  }
  updatePage(option) {
    let [i, length, ary, last, item] = [0, this.page.length];

    for (; i < length; i++) {
      item = this.page[i];
      if (item.id === option.id) {
        ary = option.modify.id.match(/\w+|\d+/g);
        last = ary.pop();

        let obj = ary.reduce((a, b) => {
          return a[b];
        }, item);

        if (obj) {
          obj[last] = option.modify.value;
        }
        break;
      }
    }
    return this;
  }
  addPlugin(data) {
    let plugins = [];
    const cb = item => {
      item.plugins = plugins = this.plugins.setPlugin(data.options).getPlguin();
    };
    this.findPage(data.pageId, cb);
    return plugins;
  }
  delPlugin(data) {
    let plugins = [];
    const cb = item => {
      item.plugins = plugins = this.plugins.detPlugin(data.pluginId).getPlguin();
    };
    this.findPage(data.pageId, cb);
    return plugins;
  }
  updatePlugin(data) {
    let plugins = [];
    const cb = item => {
      item.plugins = plugins = this.plugins.setOption(data.options).getPlguin();
    };
    this.findPage(data.pageId, cb);
    return plugins;
  }
}
