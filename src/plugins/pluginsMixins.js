// 组件公用代码块
export default {
  props: {
    options: Object,
    custom: {
      type: Object,
      default() {
        return {
          eventListener: {},
        };
      },
    },
  },

  data() {
    return {
      show: true, // 显示隐藏
      // 联动事件返回值数据栈
      // 严格按照配置的联动事件顺序来存储数据
      linkageEventBackValueStack: [],
    };
  },

  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%',
        display: this.show ? 'block' : 'none',
      };
    },
  },

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
          let result = await this.custom.eventListener[item](this);
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
    // 组件事件处理函数
    eventFunctionHandler(eventName, ...arg) {
      if (!eventName) return;

      this.custom.eventListener[eventName] && this.custom.eventListener[eventName](this, ...arg);
      this.linkageEventFunctionHandler(eventName);
    },
    // 设置组件显示隐藏
    setDisplay(show) {
      this.show = show;
    },
  },

  created() {
    this.custom.eventListener.created && this.custom.eventListener.created(this);
    this.linkageEventFunctionHandler('created');
  },

  mounted() {
    this.custom.eventListener.mounted && this.custom.eventListener.mounted(this);
    this.linkageEventFunctionHandler('mounted');
  },
};
