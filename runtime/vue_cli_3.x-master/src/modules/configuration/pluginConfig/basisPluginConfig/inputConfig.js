import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const inputConfig = {
  key: 'xaInput',
  props: {
    type: 'text',
    value: '',
    size: 'mini',
    placeholder: '输入框',
    clearable: false,
    disabled: false,
    readonly: false,
    maxlength: 200,
    prefix: '',
    suffix: '',
    search: false,
    enterButton: false,
    rows: 2,
    autosize: false,
    number: false,
    autofocus: false,
    autocomplete: 'off',
    fontSize: 14,
    fontColor: '#606266',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '输入框',
    height: 50,
    iconname: 'iconinput',
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
          eventType: '1', // 组件事件
          eventName: 'input',
          eventDes: '值改变触发',
        },
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
        {
          eventType: '1',
          eventName: 'clear',
          eventDes: '清空按钮触发',
        },
      ],
      ...commonConfig.custom.eventConfig
    ),
    eventListener: {},
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
      id: 'props.type',
      label: '类型',
      type: 'select',
      list: [
        {
          value: 'text',
          label: 'text',
        },
        {
          value: 'password',
          label: 'password',
        },
        {
          value: 'textarea',
          label: 'textarea',
        },
        {
          value: 'url',
          label: 'url',
        },
        {
          value: 'email',
          label: 'email',
        },
        {
          value: 'date',
          label: 'date',
        },
        {
          value: 'number',
          label: 'number',
        },
        {
          value: 'tel',
          label: 'tel',
        },
      ],
    },
    {
      id: 'props.size',
      label: '尺寸',
      type: 'select',
      list: [
        {
          value: 'default',
          label: 'default',
        },
        {
          value: 'large',
          label: 'large',
        },
        {
          value: 'small',
          label: 'small',
        },
      ],
    },
    {
      id: 'props.placeholder',
      label: '占位文本',
      type: 'input',
    },
    {
      id: 'props.clearable',
      label: '清空按钮',
      type: 'switch',
      activeText: '显示',
      inactiveText: '隐藏',
    },
    {
      id: 'props.disabled',
      label: '禁用状态',
      type: 'switch',
      activeText: '禁用',
      inactiveText: '启用',
    },
    {
      id: 'props.readonly',
      label: '只读',
      type: 'switch',
    },
    {
      id: 'props.fontSize',
      label: '文字大小',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.fontColor',
      label: '文字颜色',
      type: 'color',
    },
    {
      id: 'props.prefix',
      label: '头部图标',
      type: 'icon',
    },
    {
      id: 'props.suffix',
      label: '尾部图标',
      type: 'icon',
    },
  ]),
};

export default inputConfig;
