import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const radioConfig = {
  key: 'xaRadio',
  props: {
    value: '',
    disabled: false,
    size: '',
    textColor: '#fff',
    fill: '#409EFF',
    buttomStyle: false,
    border: false,
    children: [
      {
        id: '1',
        value: 'radio1',
        label: 'radio1',
        disabled: false,
      },
      {
        id: '2',
        value: 'radio2',
        label: 'radio2',
        disabled: false,
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '单选框',
    height: 35,
    iconname: 'icondanxuananniuzu',
    eventConfig: [].concat(
      [
        {
          eventType: '1', // 组件事件
          eventName: 'change',
          eventDes: '当绑定值变化时触发的事件',
        },
      ],
      ...commonConfig.custom.eventConfig
    ),
    dataConfig: [
      {
        label: '可选项配置',
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
                          value={props.data.value}
                          on-input={(val) => {
                            updateItem(vm, props)('value', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <el-checkbox
                          value={props.data.disabled}
                          size="mini"
                          on-input={(val) => {
                            updateItem(vm, props)('disabled', val);
                          }}
                        >
                          禁用
                        </el-checkbox>
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
      id: 'props.textColor',
      label: '文本颜色',
      type: 'color',
    },
    {
      id: 'props.fill',
      label: '填充色',
      type: 'color',
    },
    {
      id: 'props.buttomStyle',
      label: '按钮模式',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.border',
      label: '显示边框',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
  ]),
};

export default radioConfig;
