import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const tagConfig = {
  key: 'xaTag',
  props: {
    value: '标签1',
    type: 'success',
    hit: false,
    closable: false,
    color: '',
    size: 'mini',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '标签', height: 40, width: 65, iconname: 'icontag' }),
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
      id: 'props.hit',
      label: '边框描边',
      type: 'switch',
      activeText: '显示',
      inactiveText: '关闭',
    },
    {
      id: 'props.closable',
      label: '可关闭',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.type',
      label: '类型',
      type: 'select',
      list: [
        {
          value: 'success',
          label: 'success',
        },
        {
          value: 'info',
          label: 'info',
        },
        {
          value: 'warning',
          label: 'warning',
        },
        {
          value: 'danger',
          label: 'danger',
        },
      ],
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
      id: 'props.color',
      label: '背景色',
      type: 'color',
    },
  ]),
};

export default tagConfig;