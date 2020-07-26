import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const alertConfig = {
  key: 'xaAlert',
  props: {
    title: '成功提示的文案',
    type: 'success',
    description: '文字说明文字说明文字说明文字说明文字说明文字说明',
    closable: false,
    center: false,
    closeText: '',
    showIcon: true,
    effect: 'light',
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '警告',
    height: 70,
    width: 450,
    iconname: 'iconjinggao',
    linkageEventConfig: [].concat(
      [
        {
          id: 'setTitle',
          label: '设置组件标题',
        },
        {
          id: 'setDescription',
          label: '设置组件描述文字',
        },
      ],
      [...commonConfig.custom.linkageEventConfig]
    ),
    eventConfig: [].concat(
      [
        {
          eventType: '1', // 组件事件
          eventName: 'close',
          eventDes: '关闭alert时触发的事件',
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
      id: 'props.title',
      label: '标题',
      type: 'input',
    },
    {
      id: 'props.description',
      label: '描述',
      type: 'input',
    },
    {
      id: 'props.closeText',
      label: '关闭文字',
      type: 'input',
    },
    {
      id: 'props.closable',
      label: '是否关闭',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.showIcon',
      label: '显示图标',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.center',
      label: '是否居中',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.effect',
      label: '主题',
      type: 'select',
      list: [
        {
          value: 'light',
          label: 'light',
        },
        {
          value: 'dark',
          label: 'dark',
        },
      ],
    },
  ]),
};

export default alertConfig;
