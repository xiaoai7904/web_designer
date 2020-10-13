import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const rateConfig = {
  key: 'xaRate',
  props: {
    value: 0,
    disabled: false,
    max: 5,
    allowHalf: false,
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '评分',
    height: 50,
    width: 150,
    iconname: 'iconpingfen',
    eventConfig: [].concat(
      [
        {
          eventType: '1', // 组件事件
          eventName: 'change',
          eventDes: '当绑定值变化时触发的事件',
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
      id: 'props.disabled',
      label: '禁用状态',
      type: 'switch',
      activeText: '禁用',
      inactiveText: '启用',
    },
    {
      id: 'props.allowHalf',
      label: '是否半选',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.max',
      label: '最大值',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
  ]),
};

export default rateConfig;
