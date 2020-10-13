import { firstUpperCase } from '@/modules/utils/utils';

export default class EventSetting {
  constructor(options) {
    // 事件监听列表
    this.eventListener = {};
    // 联动事件层级链
    this.linkageEventLevel = [];
  }
  /**
   * 创建组件事件监听
   * $$标示为联动使事件
   */
  createEventListener() {
    let eventData = [];
    let linkageEventData = [];

    this.eventData = Object.keys(this.eventListener).forEach((item) => {
      let eventItem = { eventName: item, eventCallBack: this.eventListener[item] };
      item.indexOf('$$') < 0 ? eventData.push(eventItem) : linkageEventData.push(eventItem);
    });

    this.eventData = eventData;
    this.linkageEventData = linkageEventData;

    return {
      eventData,
      linkageEventData,
    };
  }
  /**
   * 创建事件函数
   */
  createEventFunction(item, functionName) {
    const eventCallbackFunction = `
        return function ${functionName ? functionName : 'on' + firstUpperCase(item.eventName) + 'EventCallBack'}(currentComponentInstance, ...arg) {
          /**
           * 函数体内的单行注释会在保存的时候删除,如果需要加注释请使用多行注释
           * window.Uidesigner.$refs[组件ID] 可以访问页面上组件实例对象
           * 支持返回Promise对象
           * @param {Object} currentComponentInstance 默认第一参数是当前组件实例对象
           * @param {Array} arg 当前事件剩余参数
           */
        }
    `;
    return Object.assign({}, item, { eventCallBack: new Function(eventCallbackFunction)() });
  }
  /**
   * 对比事件绑定函数是否有修改
   * return true 需要进行保存数据
   */
  diffEventListenerCode(codeValue, eventName) {
    if (codeValue && this.eventListener[eventName]) {
      if (codeValue.toString().replace(/\s/g, '') !== this.eventListener[eventName].toString().replace(/\s/g, '')) {
        return true;
      }
    } else if (codeValue) {
      return true;
    }
    return false;
  }
  /**
   * 保存组件事件配置
   */
  /**
   *
   * @param {*} eventListener
   */
  saveEventListener(eventListener) {
    this.eventListener = Object.assign({}, { eventListener });
    return this;
  }
  /**
   * 删除组件配置上对应事件
   */
  delEventListener(eventName) {
    let eventListener = Object.assign({}, this.eventListener);

    if (eventListener.hasOwnProperty(eventName)) {
      delete eventListener[eventName];
      this.eventListener = Object.assign({}, eventListener);
    }

    return this;
  }
  /**
   * 更新监听事件数据
   */
  updateEventListener(key, value) {
    this.eventListener = Object.assign({}, this.eventListener, arguments.length >= 2 ? { [key]: value } : key);

    return this;
  }
  /**
   * 设置事件联动层级链
   * index 0: 组件事件 1: 联动组件id 2: 联动组件类型
   * 联动事件函数名格式: 组件事件名称$$联动组件id$$联动组件事件处理类型
   * 例: input$$xaInput_dsdsdsds333dd$$getCurrentValue
   */
  setLinkageEventLevel(data, index) {
    if (!arguments.length) {
      this.linkageEventLevel = [];
      return false;
    }

    if (index === 2) {
      this.linkageEventLevel.length >= 3 && this.linkageEventLevel.pop();
      this.linkageEventLevel.push(data);
    }

    let currentLinkageEventKey = this.linkageEventLevel.join('$$');
    let currentEventListener = this.eventListener[currentLinkageEventKey];

    // 如果已经配置了该联动事件直接使用该回调函数显示
    if (index === 2 && currentEventListener) {
      return Object.assign({}, { eventName: currentLinkageEventKey, eventCallBack: currentEventListener });
    }

    this.linkageEventLevel[index] = data;

    // 选择联动类型 新增函数
    if (index === 2) {
      return this.createEventFunction({ eventName: `${this.linkageEventLevel.join('$$')}` }, data);
    }

    return false;
  }
  /**
   * 查找联动事件配置
   */
  findLinkageEvent() {
    let keys = [];
    let levels;
    let boundEvent = [];
    let currentLinkageEventString = '';

    keys = Object.keys(this.eventListener).filter((item) => item.indexOf('$$') > -1);

    if (this.linkageEventLevel.length >= 3) {
      let linkageEventLevel = [...this.linkageEventLevel];
      linkageEventLevel.pop();
      currentLinkageEventString = linkageEventLevel.join('$$');
    } else {
      currentLinkageEventString = this.linkageEventLevel.join('$$');
    }

    keys.forEach((item) => {
      levels = item.split('$$');
      let last = levels.pop();

      if (currentLinkageEventString === levels.join('$$')) {
        boundEvent.push(last);
      }
    });

    return boundEvent;
  }
}
