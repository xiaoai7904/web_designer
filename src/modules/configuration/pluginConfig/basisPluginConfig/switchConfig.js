import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const switchConfig = {
  key: 'xaSwitch',
  props: {
    value: false,
    disabled: false,
    width: 50,
    activeText: '开启',
    inactiveText: '关闭',
    activeColor: '#13ce66',
    inactiveColor: '#909399',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '开关',
    height: 35,
    width: 70,
    iconname: 'iconkaiguan',
    eventConfig: [].concat(
      [
        {
          eventType: '1',
          eventName: 'change',
          eventDes: '值改变触发',
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
      type: 'switch',
      activeText: '开启',
      inactiveText: '关闭',
    },
    {
      id: 'props.width',
      label: '宽度',
      type: 'input',
    },
    {
      id: 'props.activeText',
      label: '打开描述',
      type: 'input',
    },
    {
      id: 'props.inactiveText',
      label: '关闭描述',
      type: 'input',
    },
    {
      id: 'props.activeColor',
      label: '打开颜色',
      type: 'color',
    },
    {
      id: 'props.inactiveColor',
      label: '关闭颜色',
      type: 'color',
    },
    {
      id: 'props.disabled',
      label: '禁用状态',
      type: 'switch',
      activeText: '禁用',
      inactiveText: '启用',
    },
  ]),
};

export default switchConfig;
