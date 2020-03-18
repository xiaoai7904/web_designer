import Observer from '@/modules/observer/observer';
import { uuid, extend } from '@/modules/utils/utils';
const eventKeycodeMap = {
  46: 'DELETE',
  13: 'ENTER',
  65: 'A',
  83: 'S',
  90: 'Z',
  67: 'C',
  86: 'V',
  // 8: 'DELETE'
};
export default class PageEventManage extends Observer {
  constructor() {
    super();
    this.bindEvent();
  }
  register(evt, cb) {
    let eventNames = evt.isCtrl ? ['pageEvent', evt.key.toLocaleUpperCase(), 'isCtrl'] : ['pageEvent', evt.key.toLocaleUpperCase()];
    return this.on(eventNames.join('_'), cb);
  }
  unRegister(evt) {
    let eventNames = evt.isCtrl ? ['pageEvent', evt.key.toLocaleUpperCase(), 'isCtrl'] : ['pageEvent', evt.key.toLocaleUpperCase()];
    return this.off(eventNames.join('_'));
  }
  emit(event) {
    if (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) {
      eventKeycodeMap[event.keyCode] && this.trigger(['pageEvent', eventKeycodeMap[event.keyCode].toLocaleUpperCase(), 'isCtrl'].join('_'), event);
    } else {
      eventKeycodeMap[event.keyCode] && this.trigger(['pageEvent', eventKeycodeMap[event.keyCode].toLocaleUpperCase()].join('_'), event);
    }
  }
  bindEvent() {
    this.keydownEventFn = e => {
      if (e.keyCode === 17 || e.keyCode === 93) {
        return false;
      }
      if(e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
      }
      this.emit(e);
    };

    document.addEventListener('keydown', this.keydownEventFn);
  }
  destroyedEvent() {
    document.removeEventListener('keydown', this.keydownEventFn);
    this.event = {};
  }
}
