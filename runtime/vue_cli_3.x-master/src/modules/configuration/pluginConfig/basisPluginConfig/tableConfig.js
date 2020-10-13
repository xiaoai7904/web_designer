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
        id: '1',
        prop: 'date',
        label: '日期',
      },
      {
        id: '2',
        prop: 'name',
        label: '姓名',
      },
      {
        id: '3',
        prop: 'address',
        label: '地址',
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '表格',
    height: 240,
    width: 675,
    iconname: 'iconbiaoge',
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
    eventConfig: [].concat(
      [
        // {
        //   eventType: '1',
        //   eventName: 'select',
        //   eventDes: '勾选Checkbox触发',
        // },
        // {
        //   eventType: '1',
        //   eventName: 'selectAll',
        //   eventDes: '勾选全选Checkbox',
        // },
        // {
        //   eventType: '1',
        //   eventName: 'selectionChange',
        //   eventDes: '选择项发生变化',
        // },
        {
          eventType: '1',
          eventName: 'cellMouseEnter',
          eventDes: '单元格hover触发',
        },
        {
          eventType: '1',
          eventName: 'cellMouseLeave',
          eventDes: '单元格hover离开',
        },
        {
          eventType: '1',
          eventName: 'cellClick',
          eventDes: '单元格点击触发',
        },
        {
          eventType: '1',
          eventName: 'cellDblclick',
          eventDes: '单元格双击触发',
        },
        {
          eventType: '1',
          eventName: 'rowClick',
          eventDes: '行点击触发',
        },
        {
          eventType: '1',
          eventName: 'rowDblclick',
          eventDes: '行双击触发',
        },
        {
          eventType: '1',
          eventName: 'rowContextmenu',
          eventDes: '行鼠标右键点击',
        },
        {
          eventType: '1',
          eventName: 'headerClick',
          eventDes: '表头点击触发',
        },
        {
          eventType: '1',
          eventName: 'headerContextmenu',
          eventDes: '表头鼠标右键',
        },
        {
          eventType: '1',
          eventName: 'sortChange',
          eventDes: '排序条件变化触发',
        },
        {
          eventType: '1',
          eventName: 'filterChange',
          eventDes: '筛选条件变化触发',
        },
        // {
        //   eventType: '1',
        //   eventName: 'currentChange',
        //   eventDes: '当前行发生变化',
        // },
        // {
        //   eventType: '1',
        //   eventName: 'headerDragend',
        //   eventDes: '拖动表头改变列宽度',
        // },
        // {
        //   eventType: '1',
        //   eventName: 'expandChange',
        //   eventDes: '行展开或者关闭',
        // },
      ],
      ...commonConfig.custom.eventConfig
    ),
    dataConfig: [
      {
        label: '数据源配置',
        type: 'title',
      },
      {
        id: 'props.data',
        label: '',
        type: 'code',
        options: {
          btnName: '数据源编辑',
        },
      },
      {
        label: '表头配置',
        type: 'title',
      },
      {
        id: 'props.children',
        label: '',
        type: 'custom',
        render(h, vm) {
          function updateItem(vm, props) {
            return function(key, value) {
              let _data = vm.handlerData('props.children', 'get');
              _data.map((item) => {
                if (item.id === props.data.id) {
                  item[key] = value;
                }
              });

              vm.$store.commit('updatePluginsProps', {
                id: vm.options.id,
                modify: { id: 'props.children', value: _data },
              });
            };
          }
          return (
            <itemList
              list={vm.handlerData('props.children', 'get')}
              id="props.children"
              ins={vm}
              scopedSlots={{
                default(props) {
                  return [
                    <ul class="item-list__ul">
                      <li class="item-list__li">
                        <span class="item-list__li-label">显示值</span>
                        <el-input
                          size="mini"
                          value={props.data.label}
                          on-input={(val) => {
                            updateItem(vm, props)('label', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <span class="item-list__li-label">绑定值</span>
                        <el-input
                          size="mini"
                          value={props.data.prop}
                          on-input={(val) => {
                            updateItem(vm, props)('prop', val);
                          }}
                        />
                      </li>
                    </ul>,
                  ];
                },
              }}
            />
          );
        },
      },
    ],
  }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
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
