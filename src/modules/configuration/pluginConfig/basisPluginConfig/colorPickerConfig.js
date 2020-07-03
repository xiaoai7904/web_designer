import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const colorPickerConfig = {
  key: 'xaColorPicker',
  props: {
    value: '#409EFF',
    disabled: false,
    size: 'mini',
    showAlpha: false,
    colorFormat: 'rgb',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '颜色选择器', height: 50, width: 50, iconname: 'iconyanse' }),
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
      id: 'props.showAlpha',
      label: '透明度',
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
      id: 'props.colorFormat',
      label: '颜色格式',
      type: 'select',
      list: [
        {
          value: 'hsl',
          label: 'hsl',
        },
        {
          value: 'hsv',
          label: 'hsv',
        },
        {
          value: 'hex',
          label: 'hex',
        },
        {
          value: 'rgb',
          label: 'rgb',
        },
      ],
    },
  ]),
};

export default colorPickerConfig;
