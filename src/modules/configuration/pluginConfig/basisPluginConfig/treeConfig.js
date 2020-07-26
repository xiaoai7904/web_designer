import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const treeConfig = {
  key: 'xaTree',
  props: {
    data: [
      {
        label: '一级 1',
        children: [
          {
            label: '二级 1-1',
            children: [
              {
                label: '三级 1-1-1',
              },
            ],
          },
        ],
      },
      {
        label: '一级 2',
        children: [
          {
            label: '二级 2-1',
            children: [
              {
                label: '三级 2-1-1',
              },
            ],
          },
          {
            label: '二级 2-2',
            children: [
              {
                label: '三级 2-2-1',
              },
            ],
          },
        ],
      },
      {
        label: '一级 3',
        children: [
          {
            label: '二级 3-1',
            children: [
              {
                label: '三级 3-1-1',
              },
            ],
          },
          {
            label: '二级 3-2',
            children: [
              {
                label: '三级 3-2-1',
              },
            ],
          },
        ],
      },
    ],
    props: {
      children: 'children',
      label: 'label',
    },
    emptyText: '暂无数据',
    load: null,
    renderContent: null,
    highlightCurrent: false,
    defaultExpandAll: false,
    showCheckbox: false,
    indent: 16,
    iconClass: null,
    lazy: false,
    draggable: false,
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '树形控件',
    height: 160,
    width: 150,
    iconname: 'iconjuxingkaobei',
    eventConfig: [].concat(
      [
        {
          eventType: '1',
          eventName: 'nodeClick',
          eventDes: '节点点击时触发',
        },
        {
          eventType: '1',
          eventName: 'nodeContextmenu',
          eventDes: '节点鼠标右键点击',
        },
        {
          eventType: '1',
          eventName: 'checkChange',
          eventDes: '节点选中变化',
        },
        {
          eventType: '1',
          eventName: 'check',
          eventDes: '复选框点击触发',
        },
        {
          eventType: '1',
          eventName: 'currentChange',
          eventDes: '当前选中节点变化',
        },
        {
          eventType: '1',
          eventName: 'nodeExpand',
          eventDes: '节点展开触发',
        },
        {
          eventType: '1',
          eventName: 'nodeCollapse',
          eventDes: '节点关闭触发',
        },
        {
          eventType: '1',
          eventName: 'nodeDragStart',
          eventDes: '拖拽开始触发',
        },
        {
          eventType: '1',
          eventName: 'nodeDragEnter',
          eventDes: '拖拽进入其他节点',
        },
        {
          eventType: '1',
          eventName: 'nodeDragLeave',
          eventDes: '拖拽离开某个节点',
        },
        {
          eventType: '1',
          eventName: 'nodeDragOver',
          eventDes: '拖拽节点触发',
        },
        {
          eventType: '1',
          eventName: 'nodeDragEnd',
          eventDes: '拖拽结束触发',
        },
        {
          eventType: '1',
          eventName: 'nodeDrop',
          eventDes: '拖拽成功触发',
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
      id: 'props.data',
      label: '数据源',
      type: 'code',
      options: {
        btnName: '数据源编辑',
      },
    },
    {
      id: 'props.emptyText',
      label: '空显示值',
      type: 'input',
    },
    {
      id: 'props.indent',
      label: '水平缩进',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.highlightCurrent',
      label: '高亮选中',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.defaultExpandAll',
      label: '默认展开',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.showCheckbox',
      label: '是否选择',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.lazy',
      label: '懒加载',
      type: 'switch',
      activeText: '开启',
      inactiveText: '关闭',
    },
    {
      id: 'props.draggable',
      label: '拖拽',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
  ]),
};

export default treeConfig;
