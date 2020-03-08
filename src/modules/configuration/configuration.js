import { extend } from '../utils/utils';
const commonConfig = {
  style: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#EBEEF5',
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
      size: 'mini',
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
    custom: Object.assign({}, commonConfig.custom, { name: '输入框', height: 50, iconname: 'iconinput' }),
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
      size: 'mini',
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
    custom: Object.assign({}, commonConfig.custom, { name: '计数器', height: 50, iconname: 'iconfuhao-shuzishurukuang' }),
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
    custom: Object.assign({}, commonConfig.custom, { name: '单选框', height: 35, iconname: 'icondanxuananniuzu' }),
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
  },
  {
    key: 'xaCheckBox',
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
          value: 'checkbox1',
          label: 'checkbox1',
          disabled: false
        },
        {
          id: '2',
          value: 'checkbox2',
          label: 'checkbox2',
          disabled: false
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '复选框', height: 50, iconname: 'iconfuxuankuang' }),
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
        id: 'props.min',
        label: '最小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.max',
        label: '最大',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
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
  },
  {
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
          disabled: false
        },
        {
          id: '2',
          value: 'select2',
          label: 'select2',
          disabled: false
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '下拉框', height: 50, iconname: 'iconxialakuang' }),
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
        id: 'props.placeholder',
        label: '占位描述',
        type: 'input'
      },
      {
        id: 'props.multiple',
        label: '多选',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.clearable',
        label: '一键清除',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.multipleLimit',
        label: '最大选择',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
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
  },
  {
    key: 'xaSwitch',
    props: {
      value: false,
      disabled: false,
      width: 50,
      activeText: '开启',
      inactiveText: '关闭',
      activeColor: '#13ce66',
      inactiveColor: '#909399'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '开关', height: 35, width: 70, iconname: 'iconkaiguan' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭'
      },
      {
        id: 'props.width',
        label: '宽度',
        type: 'input'
      },
      {
        id: 'props.activeText',
        label: '打开描述',
        type: 'input'
      },
      {
        id: 'props.inactiveText',
        label: '关闭描述',
        type: 'input'
      },
      {
        id: 'props.activeColor',
        label: '打开颜色',
        type: 'color'
      },
      {
        id: 'props.inactiveColor',
        label: '关闭颜色',
        type: 'color'
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用'
      }
    ])
  },
  {
    key: 'xaProgress',
    props: {
      percentage: 50,
      type: 'line',
      strokeWidth: 20,
      status: 'text',
      color: '',
      width: 126
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '进度条', height: 50, width: 300, iconname: 'iconjindutiao' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.percentage',
        label: '当前值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: 100
        }
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'line',
            label: 'line'
          },
          {
            value: 'circle',
            label: 'circle'
          }
        ]
      },
      {
        id: 'props.status',
        label: '状态',
        type: 'select',
        list: [
          {
            value: 'success',
            label: 'success'
          },
          {
            value: 'exception',
            label: 'exception'
          },
          {
            value: 'text',
            label: 'text'
          }
        ]
      },
      {
        id: 'props.strokeWidth',
        label: '进度条宽',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.color',
        label: '颜色',
        type: 'color'
      }
    ])
  },
  {
    key: 'xaSlider',
    props: {
      value: 50,
      disabled: false,
      min: 0,
      max: 100,
      step: 1,
      showTooltip: true
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '滑块', height: 50, width: 300, iconname: 'iconhuakuai-' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.min',
        label: '最小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.max',
        label: '最大',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.step',
        label: '步数',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.showTooltip',
        label: '提示框',
        type: 'switch',
        activeText: '显示',
        inactiveText: '关闭'
      }
    ])
  },
  {
    key: 'xaTag',
    props: {
      value: '标签1',
      type: 'success',
      hit: false,
      closable: false,
      color: '',
      size: 'mini'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '标签', height: 40, width: 65, iconname: 'icontag' }),
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
        id: 'props.hit',
        label: '边框描边',
        type: 'switch',
        activeText: '显示',
        inactiveText: '关闭'
      },
      {
        id: 'props.closable',
        label: '可关闭',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'success',
            label: 'success'
          },
          {
            value: 'info',
            label: 'info'
          },
          {
            value: 'warning',
            label: 'warning'
          },
          {
            value: 'danger',
            label: 'danger'
          }
        ]
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
        id: 'props.color',
        label: '背景色',
        type: 'color'
      }
    ])
  },
  {
    key: 'xaAlert',
    props: {
      title: '成功提示的文案',
      type: 'success',
      description: '文字说明文字说明文字说明文字说明文字说明文字说明',
      closable: false,
      center: false,
      closeText: '',
      showIcon: true,
      effect: 'light'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '警告', height: 70, width: 450, iconname: 'iconjinggao' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.title',
        label: '标题',
        type: 'input'
      },
      {
        id: 'props.description',
        label: '描述',
        type: 'input'
      },
      {
        id: 'props.closeText',
        label: '关闭文字',
        type: 'input'
      },
      {
        id: 'props.closable',
        label: '是否关闭',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.showIcon',
        label: '显示图标',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.center',
        label: '是否居中',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.effect',
        label: '主题',
        type: 'select',
        list: [
          {
            value: 'light',
            label: 'light'
          },
          {
            value: 'dark',
            label: 'dark'
          }
        ]
      }
    ])
  },
  {
    key: 'xaCollapse',
    props: {
      value: '',
      accordion: false,
      children: [
        {
          id: '1',
          label: '一致性 Consistency',
          content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念'
        },
        {
          id: '2',
          label: '反馈 Feedback',
          content: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作'
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '折叠面板', height: 130, width: 200, iconname: 'iconzhediemianban' }),
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
        id: 'props.accordion',
        label: '手风琴',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭'
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
                        <span class="item-list__li-label">ID</span>
                        <el-input
                          size="mini"
                          value={props.data.id}
                          on-input={val => {
                            updateItem(vm, props)('id', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <span class="item-list__li-label">标题</span>
                        <el-input
                          size="mini"
                          value={props.data.label}
                          on-input={val => {
                            updateItem(vm, props)('label', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <span class="item-list__li-label">内容</span>
                        <el-input
                          size="mini"
                          value={props.data.content}
                          on-input={val => {
                            updateItem(vm, props)('content', val);
                          }}
                        />
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
  },
  {
    key: 'xaCalendar',
    props: {
      value: new Date()
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '日历', height: 200, width: 450, iconname: 'iconrili' }),
    options: [].concat(commonConfig.options)
  },
  {
    key: 'xaBreadcrumb',
    props: {
      separator: '/',
      children: [
        {
          id: '1',
          label: '首页',
          path: ''
        },
        {
          id: '2',
          label: '活动管理',
          path: ''
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '面包屑', height: 26, width: 250, iconname: 'iconbreadcrumbs' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.separator',
        label: '分隔符',
        type: 'input'
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
                        <span class="item-list__li-label">标题</span>
                        <el-input
                          size="mini"
                          value={props.data.label}
                          on-input={val => {
                            updateItem(vm, props)('label', val);
                          }}
                        />
                      </li>
                      <li class="item-list__li">
                        <span class="item-list__li-label">路径</span>
                        <el-input
                          size="mini"
                          value={props.data.path}
                          on-input={val => {
                            updateItem(vm, props)('path', val);
                          }}
                        />
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
  },
  {
    key: 'xaColorPicker',
    props: {
      value: '#409EFF',
      disabled: false,
      size: 'mini',
      showAlpha: false,
      colorFormat: 'rgb'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '颜色选择器', height: 50, width: 50, iconname: 'iconyanse' }),
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
        id: 'props.showAlpha',
        label: '透明度',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
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
        id: 'props.colorFormat',
        label: '颜色格式',
        type: 'select',
        list: [
          {
            value: 'hsl',
            label: 'hsl'
          },
          {
            value: 'hsv',
            label: 'hsv'
          },
          {
            value: 'hex',
            label: 'hex'
          },
          {
            value: 'rgb',
            label: 'rgb'
          }
        ]
      }
    ])
  },
  {
    key: 'xaRate',
    props: {
      value: 0,
      disabled: false,
      max: 5,
      allowHalf: false
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '评分', height: 50, width: 150, iconname: 'iconpingfen' }),
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
        id: 'props.allowHalf',
        label: '是否半选',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.max',
        label: '最大值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      }
    ])
  },
  {
    key: 'xaTimePicker',
    props: {
      value: '',
      disabled: false,
      readonly: false,
      editable: false,
      clearable: false,
      size: 'mini'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '时间选择器', height: 50, width: 230, iconname: 'iconshijian' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
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
        label: '是否只读',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.editable',
        label: '是否编辑',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.clearable',
        label: '是否清除',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
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
      }
    ])
  },
  {
    key: 'xaDatePicker',
    props: {
      value: '',
      disabled: false,
      readonly: false,
      editable: false,
      clearable: false,
      size: 'mini'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '日期选择器', height: 50, width: 230, iconname: 'iconriqi' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
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
        label: '是否只读',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.editable',
        label: '是否编辑',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.clearable',
        label: '是否清除',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
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
      }
    ])
  },
  {
    key: 'xaButton',
    props: {
      content: '按钮',
      disabled: false,
      type: 'primary',
      round: false,
      circle: false,
      plain: false,
      size: 'mini'
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '按钮', height: 50, width: 100, iconname: 'iconanniu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.content',
        label: '按钮内容',
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
        id: 'props.plain',
        label: '朴素按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.round',
        label: '圆角按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.circle',
        label: '圆形按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
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
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'primary',
            label: 'primary'
          },
          {
            value: 'success',
            label: 'success'
          },
          {
            value: 'warning',
            label: 'warning'
          },
          {
            value: 'danger',
            label: 'danger'
          },
          {
            value: 'info',
            label: 'info'
          },
          {
            value: 'text',
            label: 'text'
          }
        ]
      }
    ])
  },
  {
    key: 'xaLink',
    props: {
      content: '链接',
      disabled: false,
      type: 'primary',
      underline: false,
      href: ''
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '链接', height: 35, width: 80, iconname: 'iconlianjie' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.content',
        label: '链接内容',
        type: 'input'
      },
      {
        id: 'props.href',
        label: '地址',
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
        id: 'props.underline',
        label: '下划线',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏'
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'primary',
            label: 'primary'
          },
          {
            value: 'success',
            label: 'success'
          },
          {
            value: 'warning',
            label: 'warning'
          },
          {
            value: 'danger',
            label: 'danger'
          },
          {
            value: 'info',
            label: 'info'
          }
        ]
      }
    ])
  },
  {
    key: 'xaTable',
    props: {
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
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
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '表格', height: 240, width: 675, iconname: 'iconbiaoge' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.data',
        label: '数据源',
        type: 'code',
        options: {
          btnName: '数据源编辑'
        }
      },
      {
        id: 'props.emptyText',
        label: '空显示值',
        type: 'input'
      },
      {
        id: 'props.sumText',
        label: '汇总显示',
        type: 'input'
      },
      {
        id: 'props.stripe',
        label: '斑马纹',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭'
      },
      {
        id: 'props.border',
        label: '纵向边框',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭'
      },
      {
        id: 'props.fit',
        label: '宽度适应',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.showHeader',
        label: '显示表头',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.showSummary',
        label: '显示合计',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏'
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
      }
    ])
  },
  {
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
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      props: {
        children: 'children',
        label: 'label'
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
      draggable: false
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '树形控件', height: 160, width: 150, iconname: 'iconjuxingkaobei' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.data',
        label: '数据源',
        type: 'code',
        options: {
          btnName: '数据源编辑'
        }
      },
      {
        id: 'props.emptyText',
        label: '空显示值',
        type: 'input'
      },
      {
        id: 'props.indent',
        label: '水平缩进',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.highlightCurrent',
        label: '高亮选中',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.defaultExpandAll',
        label: '默认展开',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.showCheckbox',
        label: '是否选择',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.lazy',
        label: '懒加载',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭'
      },
      {
        id: 'props.draggable',
        label: '拖拽',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      }
    ])
  },
  {
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
          iconClass: 'el-icon-location'
        },
        {
          title: '导航2',
          iconClass: 'el-icon-menu',
          index: '2',
          children: [
            {
              index: '2-1',
              title: '导航2-1',
              disabled: false
            },
            {
              index: '2-2',
              title: '导航2-2',
              disabled: false
            }
          ]
        },
        {
          title: '导航3',
          iconClass: 'el-icon-menu',
          index: '3',
          children: [
            {
              index: '3-1',
              title: '导航3-1',
              disabled: false
            },
            {
              index: '3-2',
              title: '导航3-2',
              disabled: false
            }
          ]
        }
      ]
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '菜单', height: 350, width: 170, iconname: 'iconmenu-line' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.children',
        type: 'code',
        label: '数据源',
        options: {
          btnName: '数据源编辑'
        }
      },
      {
        id: 'props.defaultActive',
        label: '激活菜单',
        type: 'input'
      },
      {
        id: 'props.mode',
        label: '模式',
        type: 'select',
        list: [
          {
            value: 'horizontal',
            label: 'horizontal'
          },
          {
            value: 'vertical',
            label: 'vertical'
          }
        ]
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
        inactiveText: '否'
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
        type: 'color'
      },
      {
        id: 'props.textColor',
        label: '文字色',
        type: 'color'
      },
      {
        id: 'props.activeTextColor',
        label: '激活文字色',
        type: 'color'
      }
    ])
  },
  {
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
      autoSize: true
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '容器组件', iconname: 'iconrongqi' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title'
      },
      {
        id: 'props.colNum',
        label: '列数',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.rowHeight',
        label: '行高',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.marginTopBottom',
        label: '上下边距',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.marginLeftRight',
        label: '左右边距',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity
        }
      },
      {
        id: 'props.isDraggable',
        label: '否可拖动',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.isResizeable',
        label: '调整大小',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.verticalCompact',
        label: '垂直紧凑',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.userCssTransforms',
        label: '使用CSS',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.responsive',
        label: '响应窗口',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        id: 'props.autoSize',
        label: '自动尺寸',
        type: 'switch',
        activeText: '是',
        inactiveText: '否'
      },
      {
        label: '子组件列表',
        type: 'title'
      },
      {
        id: 'props.children',
        label: '',
        type: 'custom',
        render(h, vm) {
          const handlerDel = (data, delData) => {
            vm.$store.commit('updatePluginsProps', data)
            vm.$store.commit('addPlugin', delData)
          }

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
                    </ul>
                  ];
                }
              }}
            />
          );
        }
      }
    ]),
    children: []
  }
  // {
  //   key: 'xaHorizontalLayout',
  //   props: {
  //     cols: [{component: '1'},{component: '2'},{component: '3'},{component: '4'}]
  //   },
  //   style: Object.assign({}, commonConfig.style),
  //   custom: Object.assign({}, commonConfig.custom, { name: '水平布局', iconname: 'iconmenu-line' }),
  //   options: [].concat(commonConfig.options, [
  //     {
  //       label: '属性配置',
  //       type: 'title'
  //     }
  //   ])
  // }
];

export default class Configuration {
  constructor(options) {
    if (!window.Uidesigner) {
      window.Uidesigner = {};
    }
    this.options = window.Uidesigner.configuration = Object.assign([], DEFAULT_CONFIG, options);
  }
  setOption() {}
  getOption(key) {
    if (!key) return extend(true, [], this.options);
    return extend(
      true,
      [],
      this.options.filter(item => item.key === key)
    );
  }
  getDefaultConfig() {
    return extend(true, [], this.options);
  }
}
