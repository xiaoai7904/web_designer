import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const linkConfig = {
  key: 'xaLink',
  props: {
    content: '链接',
    disabled: false,
    type: 'primary',
    underline: false,
    href: '',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '链接', height: 35, width: 80, iconname: 'iconlianjie' }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.content',
      label: '链接内容',
      type: 'input',
    },
    {
      id: 'props.href',
      label: '地址',
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
      id: 'props.underline',
      label: '下划线',
      type: 'switch',
      activeText: '显示',
      inactiveText: '隐藏',
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
      ],
    },
  ]),
};

export default linkConfig;
