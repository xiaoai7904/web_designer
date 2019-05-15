import { extend } from '../utils/utils';
const commonConfig = {
  style: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: '#fff'
  },
  custom: {
    width: 200,
    height: 200,
    x: 0,
    y: 0
  },
  options: [
    {
      label: '组件信息',
      type: 'title'
    },
    {
      id: 'custom.id',
      label: '组件ID',
      type: 'input',
      options: {
        disabled: true
      }
    },
    {
      id: 'custom.name',
      label: '组件名',
      type: 'input'
    },
    {
      label: '尺寸',
      type: 'title'
    },
    {
      id: 'custom.width',
      label: '宽',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Infinity
      }
    },
    {
      id: 'custom.height',
      label: '高',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Infinity
      }
    },
    {
      label: '位置',
      type: 'title'
    },
    {
      id: 'custom.x',
      label: 'x坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 1920
      }
    },
    {
      id: 'custom.y',
      label: 'y坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 850
      }
    },
    {
      label: '样式配置',
      type: 'title'
    },
    {
      id: 'style.paddingTop',
      label: '内边距-上',
      type: 'inputNumber'
    },
    {
      id: 'style.paddingBottom',
      label: '内边距-下',
      type: 'inputNumber'
    },
    {
      id: 'style.paddingLeft',
      label: '内边距-左',
      type: 'inputNumber'
    },
    {
      id: 'style.paddingRight',
      label: '内边距-右',
      type: 'inputNumber'
    },
    {
      id: 'style.borderWidth',
      label: '边框宽度',
      type: 'inputNumber'
    },
    {
      id: 'style.borderStyle',
      label: '边框样式',
      type: 'select',
      list: [
        {
          label: '无',
          value: 'none'
        },
        {
          label: '直线',
          value: 'solid'
        },
        {
          label: '虚线',
          value: 'dashed'
        },
        {
          label: '圆点线',
          value: 'dotted'
        },
        {
          label: '双实线',
          value: 'double'
        }
      ]
    },
    {
      id: 'style.borderColor',
      label: '边框颜色',
      type: 'color'
    },
    ,
    {
      id: 'style.backgroundColor',
      label: '背景颜色',
      type: 'color'
    }
  ]
};
/**
 * 组件配置信息
 */
const DEFAULT_CONFIG = [
  {
    key: 'xaInput',
    props: {
      type: 'text',
      value: '',
      size: 'small',
      placeholder: '输入框',
      clearable: false,
      disabled: false,
      readonly: false,
      maxlength: 200,
      prefix: '',
      suffix: '',
      search: false,
      enterButton: false,
      rows: 2,
      autosize: false,
      number: false,
      autofocus: false,
      autocomplete: 'off',
      fontSize: 14,
      fontColor: '#606266'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: 'Input 输入框', height: 50 }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'input'
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'text',
            label: 'text'
          },
          {
            value: 'password',
            label: 'password'
          },
          {
            value: 'textarea',
            label: 'textarea'
          },
          {
            value: 'url',
            label: 'url'
          },
          {
            value: 'email',
            label: 'email'
          },
          {
            value: 'date',
            label: 'date'
          },
          {
            value: 'number',
            label: 'number'
          },
          {
            value: 'tel',
            label: 'tel'
          }
        ]
      },
      {
        id: 'props.size',
        label: '尺寸',
        type: 'select',
        list: [
          {
            value: 'default',
            label: 'default'
          },
          {
            value: 'large',
            label: 'large'
          },
          {
            value: 'small',
            label: 'small'
          }
        ]
      },
      {
        id: 'props.placeholder',
        label: '占位文本',
        type: 'input'
      },
      {
        id: 'props.clearable',
        label: '清空按钮',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏'
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用'
      },
      {
        id: 'props.readonly',
        label: '只读',
        type: 'switch'
      },
      {
        id: 'props.fontSize',
        label: '文字大小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      ,
      {
        id: 'props.fontColor',
        label: '文字颜色',
        type: 'color'
      },
      {
        id: 'props.prefix',
        label: '头部图标',
        type: 'icon'
      },
      {
        id: 'props.suffix',
        label: '尾部图标',
        type: 'icon'
      }
    ])
  },
  {
    key: 'xaInputNumber',
    props: {
      value: '',
      size: 'small',
      placeholder: '输入框',
      disabled: false,
      max: Infinity,
      min: -Infinity,
      step: 1,
      size: '',
      controls: true,
      controlsPosition: ''
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: 'InputNumber 计数器', height: 50 }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'input'
      },
      {
        id: 'props.size',
        label: '尺寸',
        type: 'select',
        list: [
          {
            value: 'medium',
            label: 'medium'
          },
          {
            value: 'small',
            label: 'small'
          },
          {
            value: 'mini',
            label: 'mini'
          }
        ]
      },
      {
        id: 'props.placeholder',
        label: '占位文本',
        type: 'input'
      },
      {
        id: 'props.step',
        label: '步长',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用'
      },
      {
        id: 'props.controls',
        label: '控制按钮',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏'
      },
      {
        id: 'props.controlsPosition',
        label: '按钮位置',
        type: 'select',
        list: [
          {
            value: '默认',
            label: ''
          },
          {
            value: 'right',
            label: '右'
          }
        ]
      }
    ])
  },
  {
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
          disabled: false
        },
        {
          id: '2',
          value: 'radio2',
          label: 'radio2',
          disabled: false
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: 'Radio 单选框', height: 35 }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'input'
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用'
      },
      {
        id: 'props.size',
        label: '尺寸',
        type: 'select',
        list: [
          {
            value: 'mini',
            label: 'mini'
          },
          {
            value: 'small',
            label: 'small'
          },
          {
            value: 'medium',
            label: 'medium'
          }
        ]
      },
      {
        id: 'props.textColor',
        label: '文本颜色',
        type: 'color'
      },
      {
        id: 'props.fill',
        label: '填充色',
        type: 'color'
      },
      {
        id: 'props.buttomStyle',
        label: '按钮模式',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.border',
        label: '显示边框',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        label: '可选项配置',
        type: 'title'
      },
      {
        id: 'props.children',
        label: '',
        type: 'custom',
        render(h, vm) {
          function updateItem(vm, props) {
            return function(key, value) {
              let _data = vm.handlerData('props.children', 'get');
              _data.map(item => {
                if (item.id === props.data.id) {
                  item[key] = value;
                }
              });

              vm.$store.commit('updatePluginsProps', {
                id: vm.options.id,
                modify: { id: 'props.children', value: _data }
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
                          on-input={val => {
                            updateItem(vm, props)('label', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <span class="item-list__li-label">绑定值</span>
                        <el-input
                          size="mini"
                          value={props.data.value}
                          on-input={val => {
                            updateItem(vm, props)('value', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <el-checkbox
                          value={props.data.disabled}
                          size="mini"
                          on-input={val => {
                            updateItem(vm, props)('disabled', val);
                          }}
                        >
                          禁用
                        </el-checkbox>
                      </li>
                    </ul>
                  ];
                }
              }}
            />
          );
        }
      }
    ])
  }
];
export default class Configuration {
  constructor(options) {
    if (!window.webDesigner) {
      window.webDesigner = { configuration: null };
    }
    this.options = window.webDesigner.configuration = Object.assign([], DEFAULT_CONFIG, options);
  }
  setOption() {}
  getOption(key) {
    if (!key) return extend(true, [], this.options);
    return extend(true, [], this.options.filter(item => item.key === key));
  }
  getDefaultConfig() {
    return extend(true, [], this.options);
  }
}
