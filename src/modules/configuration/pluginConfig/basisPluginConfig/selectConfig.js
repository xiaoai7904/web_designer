import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const selectConfig = {
  key: 'xaSelect',
  props: {
    value: '',
    disabled: false,
    placeholder: '请选择',
    multiple: false,
    clearable: false,
    multipleLimit: 0,
    children: [
      {
        id: '1',
        value: 'select1',
        label: 'select1',
        disabled: false,
      },
      {
        id: '2',
        value: 'select2',
        label: 'select2',
        disabled: false,
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, {
    name: '下拉框',
    height: 50,
    iconname: 'iconxialakuang',
    eventConfig: [].concat(
      [
        {
          eventType: '1', // 组件事件
          eventName: 'change',
          eventDes: '选中值变化时触发',
        },
        {
          eventType: '1',
          eventName: 'visibleChange',
          eventDes: '下拉框出现/隐藏时触发',
        },
        {
          eventType: '1',
          eventName: 'removeTag',
          eventDes: '移除tag时触发',
        },
        {
          eventType: '1',
          eventName: 'blur',
          eventDes: '失去焦点触发',
        },
        {
          eventType: '1',
          eventName: 'focus',
          eventDes: '获得焦点触发',
        },
        {
          eventType: '1',
          eventName: 'clear',
          eventDes: '清空按钮触发',
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
      id: 'props.placeholder',
      label: '占位描述',
      type: 'input',
    },
    {
      id: 'props.multiple',
      label: '多选',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.clearable',
      label: '一键清除',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.multipleLimit',
      label: '最大选择',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
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
  ]),
};

export default selectConfig;
