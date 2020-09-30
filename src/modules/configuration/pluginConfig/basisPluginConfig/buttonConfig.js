import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const buttonConfig = {
  key: 'xaButton',
  props: {
    content: '按钮',
    disabled: false,
    type: 'primary',
    round: false,
    circle: false,
    plain: false,
    size: 'mini',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '按钮',
    height: 50,
    width: 100,
    iconname: 'iconanniu',
    linkageEventConfig: [].concat([
      {
        id: 'setDisplay',
        label: '获取组件显示隐藏',
      },
    ], ...commonConfig.custom.linkageEventConfig),
    eventConfig: [].concat([
      {
        eventType: '1', // 组件事件
        eventName: 'click',
        eventDes: '点击触发',
      },
    ], ...commonConfig.custom.eventConfig),
    eventListener: {},
  }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.content',
      label: '按钮内容',
      type: 'input',
    },
    {
      id: 'props.disabled',
      label: '禁用状态',
      type: 'switch',
      activeText: '禁用',
      inactiveText: '启用',
    },
    {
      id: 'props.plain',
      label: '朴素按钮',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.round',
      label: '圆角按钮',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.circle',
      label: '圆形按钮',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.size',
      label: '尺寸',
      type: 'select',
      list: [
        {
          value: 'mini',
          label: 'mini',
        },
        {
          value: 'small',
          label: 'small',
        },
        {
          value: 'medium',
          label: 'medium',
        },
      ],
    },
    {
      id: 'props.type',
      label: '类型',
      type: 'select',
      list: [
        {
          value: 'primary',
          label: 'primary',
        },
        {
          value: 'success',
          label: 'success',
        },
        {
          value: 'warning',
          label: 'warning',
        },
        {
          value: 'danger',
          label: 'danger',
        },
        {
          value: 'info',
          label: 'info',
        },
        {
          value: 'text',
          label: 'text',
        },
      ],
    },
  ]),
};

export default buttonConfig;
