import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const menuConfig = {
  key: 'xaMenu',
  props: {
    defaultActive: '',
    mode: 'vertical',
    // collapse: false,
    backgroundColor: '#fff',
    textColor: '#303133',
    activeTextColor: '#409EFF',
    // uniqueOpened: false,
    // menuTrigger: 'hover',
    router: false,
    // collapseTransition: true,
    children: [
      {
        index: '1',
        title: '导航1',
        disabled: false,
        iconClass: 'el-icon-location',
      },
      {
        title: '导航2',
        iconClass: 'el-icon-menu',
        index: '2',
        children: [
          {
            index: '2-1',
            title: '导航2-1',
            disabled: false,
          },
          {
            index: '2-2',
            title: '导航2-2',
            disabled: false,
          },
        ],
      },
      {
        title: '导航3',
        iconClass: 'el-icon-menu',
        index: '3',
        children: [
          {
            index: '3-1',
            title: '导航3-1',
            disabled: false,
          },
          {
            index: '3-2',
            title: '导航3-2',
            disabled: false,
          },
        ],
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '菜单', height: 350, width: 170, iconname: 'iconmenu-line' }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.children',
      type: 'code',
      label: '数据源',
      options: {
        btnName: '数据源编辑',
      },
    },
    {
      id: 'props.defaultActive',
      label: '激活菜单',
      type: 'input',
    },
    {
      id: 'props.mode',
      label: '模式',
      type: 'select',
      list: [
        {
          value: 'horizontal',
          label: 'horizontal',
        },
        {
          value: 'vertical',
          label: 'vertical',
        },
      ],
    },
    // {
    //   id: 'props.menuTrigger',
    //   label: '触发方式',
    //   type: 'select',
    //   list: [
    //     {
    //       value: 'hover',
    //       label: 'hover'
    //     },
    //     {
    //       value: 'click',
    //       label: 'click'
    //     }
    //   ]
    // },
    // {
    //   id: 'props.collapse',
    //   label: '水平折叠',
    //   type: 'switch',
    //   activeText: '是',
    //   inactiveText: '否'
    // },
    // {
    //   id: 'props.uniqueOpened',
    //   label: '单个菜单展开',
    //   type: 'switch',
    //   activeText: '是',
    //   inactiveText: '否'
    // },
    {
      id: 'props.router',
      label: 'vue-router',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    // {
    //   id: 'props.collapseTransition',
    //   label: '折叠动画',
    //   type: 'switch',
    //   activeText: '是',
    //   inactiveText: '否'
    // },
    {
      id: 'props.backgroundColor',
      label: '背景色',
      type: 'color',
    },
    {
      id: 'props.textColor',
      label: '文字色',
      type: 'color',
    },
    {
      id: 'props.activeTextColor',
      label: '激活文字色',
      type: 'color',
    },
  ]),
};

export default menuConfig;
