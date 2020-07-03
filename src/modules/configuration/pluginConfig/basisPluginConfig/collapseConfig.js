import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const collapseConfig = {
  key: 'xaCollapse',
  props: {
    value: '',
    accordion: false,
    children: [
      {
        id: '1',
        label: '一致性 Consistency',
        content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
      },
      {
        id: '2',
        label: '反馈 Feedback',
        content: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作',
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '折叠面板', height: 130, width: 200, iconname: 'iconzhediemianban' }),
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
      id: 'props.accordion',
      label: '手风琴',
      type: 'switch',
      activeText: '开启',
      inactiveText: '关闭',
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
                      <span class="item-list__li-label">ID</span>
                      <el-input
                        size="mini"
                        value={props.data.id}
                        on-input={(val) => {
                          updateItem(vm, props)('id', val);
                        }}
                      />
                    </li>
                    <li class="item-list__li">
                      <span class="item-list__li-label">标题</span>
                      <el-input
                        size="mini"
                        value={props.data.label}
                        on-input={(val) => {
                          updateItem(vm, props)('label', val);
                        }}
                      />
                    </li>
                    <li class="item-list__li">
                      <span class="item-list__li-label">内容</span>
                      <el-input
                        size="mini"
                        value={props.data.content}
                        on-input={(val) => {
                          updateItem(vm, props)('content', val);
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
  ]),
};

export default collapseConfig;
