/**
 * 管理所有页面组件
 */
import Observer from '@/modules/observer/observer';
import { uuid, extend } from '@/modules/utils/utils';
export default class Plugins extends Observer {
  constructor() {
    super();
    this.plugins = [];
  }
  setPlugin(data) {
    this.plugins.push(this.addAttrs(Object.assign({}, data)));
    this.trigger('add-plugins');
    return this;
  }
  detPlugin(id) {
    if (!id) {
      this.plugins = [];
    }

    let [i, length] = [0, this.plugins.length];

    for (; i < length; i++) {
      if (this.plugins[i].id === id) {
        this.plugins.splice(i, 1);
        break;
      }
    }
    return this;
  }
  getPlguin(key) {
    if (key) return extend(true, [], this.plugins.filter(item => item.key === key));
    return extend(true, [], this.plugins);
  }
  addAttrs(data) {
    if(!data.id) {
      data['id'] = data.key + '_' + uuid();
    }
    data.custom && (data.custom['id'] = data.id);
    return data;
  }
  setOption(option) {
    let [i, length, ary, last, item] = [0, this.plugins.length];

    for (; i < length; i++) {
      item = this.plugins[i];
      if (item.id === option.id) {
        ary = option.modify.id.match(/\w+|\d+/g);
        last = ary.pop();

        let obj = ary.reduce((a, b) => a[b], item);

        if (obj) {
          obj[last] = option.modify.value;
        }
        break;
      }
    }
    return this;
  }
}
