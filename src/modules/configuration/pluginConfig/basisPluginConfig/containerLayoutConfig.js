import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const containerLayoutConfig = {
  key: 'xaContainerLayout',
  props: {
    colNum: 24,
    rowHeight: 30,
    isDraggable: true,
    isResizeable: true,
    verticalCompact: true,
    marginTopBottom: 5,
    marginLeftRight: 5,
    userCssTransforms: true,
    responsive: true,
    autoSize: true,
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '容器组件', iconname: 'iconrongqi' }),
  options: [].concat(commonConfig.options, [
    {
      label: '属性配置',
      type: 'title',
    },
    {
      id: 'props.colNum',
      label: '列数',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.rowHeight',
      label: '行高',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.marginTopBottom',
      label: '上下边距',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.marginLeftRight',
      label: '左右边距',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
      },
    },
    {
      id: 'props.isDraggable',
      label: '否可拖动',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.isResizeable',
      label: '调整大小',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.verticalCompact',
      label: '垂直紧凑',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.userCssTransforms',
      label: '使用CSS',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.responsive',
      label: '响应窗口',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      id: 'props.autoSize',
      label: '自动尺寸',
      type: 'switch',
      activeText: '是',
      inactiveText: '否',
    },
    {
      label: '子组件列表',
      type: 'title',
    },
    {
      id: 'props.children',
      label: '',
      type: 'custom',
      render(h, vm) {
        const handlerDel = (data, delData) => {
          vm.$store.commit('updatePluginsProps', data);
          vm.$store.commit('addPlugin', delData);
        };

        return (
          <itemList
            list={vm.handlerData('children', 'get')}
            id="children"
            ins={vm}
            isContainer
            cutomDelCallback={handlerDel}
            scopedSlots={{
              default(props) {
                return [
                  <ul class="item-list__ul">
                    <li class="item-list__li">
                      <span class="item-list__li-label">组件名:</span>
                      <el-input size="mini" value={props.data.custom.name} disabled />
                    </li>
                    <li class="item-list__li">
                      <span class="item-list__li-label">组件id:</span>
                      <el-input size="mini" value={props.data.custom.id} disabled />
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
  children: [],
};

export default containerLayoutConfig;
