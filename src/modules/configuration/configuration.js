import { extend } from '../utils/utils';
import DEFAULT_CONFIG from './defaultConfig';

/**
 * 系统组件配置
 */
export default class Configuration {
  constructor(options) {
    if (!window.Uidesigner) {
      window.Uidesigner = {};
    }
    this.options = window.Uidesigner.configuration = Object.assign([], DEFAULT_CONFIG, options);
  }
  setOption() {}
  getOption(key) {
    if (!key) return extend(true, [], this.options);
    return extend(
      true,
      [],
      this.options.filter(item => item.key === key)
    );
  }
  getDefaultConfig() {
    return extend(true, [], this.options);
  }
}
