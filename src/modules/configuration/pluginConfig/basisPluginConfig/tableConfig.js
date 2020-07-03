import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const tableConfig = {
  key: 'xaTable',
  props: {
    data: [
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      },
    ],
    stripe: false,
    border: false,
    size: 'mini',
    fit: true,
    showHeader: true,
    emptyText: '暂无数据',
    showSummary: false,
    sumText: '合计',
    summaryMethod: null,
    spanMethod: null,
    children: [
      {
        prop: 'date',
        label: '日期',
      },
      {
        prop: 'name',
        label: '姓名',
      },
      {
        prop: 'address',
        label: '地址',
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '表格', height: 240, width: 675, iconname: 'iconbiaoge' }),
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
      id: 'props.sumText',
      label: '汇总显示',
      type: 'input',
    },
    {
      id: 'props.stripe',
      label: '斑马纹',
      type: 'switch',
      activeText: '开启',
      inactiveText: '关闭',
    },
    {
      id: 'props.border',
      label: '纵向边框',
      type: 'switch',
      activeText: '开启',
      inactiveText: '关闭',
    },
    {
      id: 'props.fit',
      label: '宽度适应',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.showHeader',
      label: '显示表头',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.showSummary',
      label: '显示合计',
      type: 'switch',
      activeText: '显示',
      inactiveText: '隐藏',
    },
    {
      id: 'props.size',
      label: '尺寸',
      type: 'select',
      list: [
        {
          value: 'medium',
          label: 'medium',
        },
        {
          value: 'small',
          label: 'small',
        },
        {
          value: 'mini',
          label: 'mini',
        },
      ],
    },
  ]),
};

export default tableConfig;
