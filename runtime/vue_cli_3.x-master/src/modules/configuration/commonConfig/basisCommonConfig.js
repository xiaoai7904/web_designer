// 组件基础通用配置
export const basisCommonConfig = {
  style: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#EBEEF5',
    backgroundColor: '#fff',
  },
  custom: {
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    autoView: {
      x: 0,
      y: 0,
      w: 24,
      h: 2,
    },
    // 联动事件配置
    linkageEventConfig: [
      {
        id: 'setDisplay',
        label: '获取组件显示隐藏',
      },
    ],
    // 组件事件配置
    eventConfig: [
      {
        eventType: '1',
        eventName: 'created',
        eventDes: '组件实例初始化完成',
      },
      {
        eventType: '1',
        eventName: 'mounted',
        eventDes: '组件元素挂载完成',
      },
      {
        eventType: '3',
        eventName: 'customEvent',
        eventDes: '组件自定义事件',
      },
    ],
    eventListener: {}, // 组件监听事件数据
  },
  options: [
    {
      label: '组件信息',
      type: 'title',
    },
    {
      id: 'custom.id',
      label: '组件ID',
      type: 'input',
      options: {
        disabled: true,
      },
    },
    {
      id: 'custom.name',
      label: '组件名',
      type: 'input',
    },
    {
      label: '尺寸',
      type: 'title',
    },
    {
      id: 'custom.width',
      label: '宽',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'custom.height',
      label: '高',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      label: '位置',
      type: 'title',
    },
    {
      id: 'custom.x',
      label: 'x坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 1920,
      },
    },
    {
      id: 'custom.y',
      label: 'y坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 850,
      },
    },
    {
      label: '样式配置',
      type: 'title',
    },
    {
      id: 'style.paddingTop',
      label: '内边距-上',
      type: 'inputNumber',
    },
    {
      id: 'style.paddingBottom',
      label: '内边距-下',
      type: 'inputNumber',
    },
    {
      id: 'style.paddingLeft',
      label: '内边距-左',
      type: 'inputNumber',
    },
    {
      id: 'style.paddingRight',
      label: '内边距-右',
      type: 'inputNumber',
    },
    {
      id: 'style.borderWidth',
      label: '边框宽度',
      type: 'inputNumber',
    },
    {
      id: 'style.borderStyle',
      label: '边框样式',
      type: 'select',
      list: [
        {
          label: '无',
          value: 'none',
        },
        {
          label: '直线',
          value: 'solid',
        },
        {
          label: '虚线',
          value: 'dashed',
        },
        {
          label: '圆点线',
          value: 'dotted',
        },
        {
          label: '双实线',
          value: 'double',
        },
      ],
    },
    {
      id: 'style.borderColor',
      label: '边框颜色',
      type: 'color',
    },
    {
      id: 'style.backgroundColor',
      label: '背景颜色',
      type: 'color',
    },
  ],
};

export default basisCommonConfig;
