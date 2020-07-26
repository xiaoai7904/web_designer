import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const inputNumberConfig = {
  key: 'xaInputNumber',
  props: {
    value: '',
    size: 'mini',
    placeholder: '输入框',
    disabled: false,
    max: Number.MAX_SAFE_INTEGER,
    min: -Number.MAX_SAFE_INTEGER,
    step: 1,
    size: '',
    controls: true,
    controlsPosition: '',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '计数器',
    height: 50,
    iconname: 'iconfuhao-shuzishurukuang',
    linkageEventConfig: [].concat(
      [
        {
          id: 'getCurrentValue',
          label: '获取组件当前值',
        },
        {
          id: 'setCurrentValue',
          label: '设置组件当前值',
        },
      ],
      [...commonConfig.custom.linkageEventConfig]
    ),
    eventConfig: [].concat(
      [
        {
          eventType: '1',
          eventName: 'blur',
          eventDes: '失去焦点触发',
        },
        {
          eventType: '1',
          eventName: 'focus',
          eventDes: '获得焦点触发',
        },
        {
          eventType: '1',
          eventName: 'change',
          eventDes: '失去焦点或回车触发',
        },
      ],
      ...commonConfig.custom.eventConfig
    ),
  }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.value',
      label: '当前值',
      type: 'input',
    },
    {
      id: 'props.size',
      label: '尺寸',
      type: 'select',
      list: [
        {
          value: 'medium',
          label: 'medium',
        },
        {
          value: 'small',
          label: 'small',
        },
        {
          value: 'mini',
          label: 'mini',
        },
      ],
    },
    {
      id: 'props.placeholder',
      label: '占位文本',
      type: 'input',
    },
    {
      id: 'props.step',
      label: '步长',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.disabled',
      label: '禁用状态',
      type: 'switch',
      activeText: '禁用',
      inactiveText: '启用',
    },
    {
      id: 'props.controls',
      label: '控制按钮',
      type: 'switch',
      activeText: '显示',
      inactiveText: '隐藏',
    },
    {
      id: 'props.controlsPosition',
      label: '按钮位置',
      type: 'select',
      list: [
        {
          value: '默认',
          label: '',
        },
        {
          value: 'right',
          label: '右',
        },
      ],
    },
  ]),
};

export default inputNumberConfig;
