import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const breadcrumbConfig = {
  key: 'xaBreadcrumb',
  props: {
    separator: '/',
    children: [
      {
        id: '1',
        label: '首页',
        path: '',
      },
      {
        id: '2',
        label: '活动管理',
        path: '',
      },
    ],
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '面包屑', height: 26, width: 250, iconname: 'iconbreadcrumbs' }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.separator',
      label: '分隔符',
      type: 'input',
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
                      <span class="item-list__li-label">路径</span>
                      <el-input
                        size="mini"
                        value={props.data.path}
                        on-input={(val) => {
                          updateItem(vm, props)('path', val);
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

export default breadcrumbConfig;
