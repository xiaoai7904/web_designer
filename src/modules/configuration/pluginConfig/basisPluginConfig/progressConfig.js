import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const progressConfig = {
  key: 'xaProgress',
  props: {
    percentage: 50,
    type: 'line',
    strokeWidth: 20,
    status: 'text',
    color: '',
    width: 126,
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '进度条',
    height: 50,
    width: 300,
    iconname: 'iconjindutiao',
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
  }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.percentage',
      label: '当前值',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 100,
      },
    },
    {
      id: 'props.type',
      label: '类型',
      type: 'select',
      list: [
        {
          value: 'line',
          label: 'line',
        },
        {
          value: 'circle',
          label: 'circle',
        },
      ],
    },
    {
      id: 'props.status',
      label: '状态',
      type: 'select',
      list: [
        {
          value: 'success',
          label: 'success',
        },
        {
          value: 'exception',
          label: 'exception',
        },
        {
          value: 'text',
          label: 'text',
        },
      ],
    },
    {
      id: 'props.strokeWidth',
      label: '进度条宽',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.color',
      label: '颜色',
      type: 'color',
    },
  ]),
};

export default progressConfig;
