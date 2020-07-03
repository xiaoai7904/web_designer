import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const datePickerConfig = {
  key: 'xaDatePicker',
  props: {
    value: '',
    disabled: false,
    readonly: false,
    editable: false,
    clearable: false,
    size: 'mini',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '日期选择器', height: 50, width: 230, iconname: 'iconriqi' }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
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
      label: '是否只读',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.editable',
      label: '是否编辑',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.clearable',
      label: '是否清除',
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
  ]),
};

export default datePickerConfig;
