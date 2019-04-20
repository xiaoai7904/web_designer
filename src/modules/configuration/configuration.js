import { extend } from '../utils/utils';
/**
 * 组件配置信息
 */
const DEFAULT_CONFIG = [
  {
    key: 'xaInput',
    name: 'Input 输入框',
    props: {
      type: 'text',
      value: '',
      size: 'small',
      placeholder: '输入框',
      clearable: false,
      disabled: false,
      readonly: false,
      maxlength: 200,
      icon: '',
      prefix: '',
      suffix: '',
      search: false,
      enterButton: false,
      rows: 2,
      autosize: false,
      number: false,
      autofocus: false,
      autocomplete: 'off'
    },
    style: {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#000'
    },
    custom: {
      width: 200,
      height: 200,
      x: 0,
      y: 0
    },
    options: [
      {
        label: '尺寸',
        type: 'title'
      },
      {
        id: 'custom.width',
        label: '宽',
        type: 'inputNumber'
      },
      {
        id: 'custom.height',
        label: '高',
        type: 'inputNumber'
      },
      {
        label: '位置',
        type: 'title'
      },
      {
        id: 'custom.x',
        label: 'x坐标',
        type: 'inputNumber'
      },
      {
        id: 'custom.y',
        label: 'y坐标',
        type: 'inputNumber'
      },
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
        label: '样式配置',
        type: 'title'
      },
      {
        id: 'style.paddingTop',
        label: '内边距-上',
        type: 'inputNumber',
      },
      {
        id: 'style.paddingBottom',
        label: '内边距-下',
        type: 'inputNumber',
      },
      {
        id: 'style.paddingLeft',
        label: '内边距-左',
        type: 'inputNumber',
      },
      {
        id: 'style.paddingRight',
        label: '内边距-右',
        type: 'inputNumber',
      },
      {
        id: 'style.borderWidth',
        label: '边框宽度',
        type: 'inputNumber',
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
      }
    ]
  }
];
export default class Configuration {
  constructor(options) {
    this.options = Object.assign([], DEFAULT_CONFIG, options);
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
