// 组件基础通用配置
const commonConfig = {
  style: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#EBEEF5',
    backgroundColor: '#fff',
  },
  custom: {
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    autoView: {
      x: 0,
      y: 0,
      w: 24,
      h: 2,
    },
  },
  options: [
    {
      label: '组件信息',
      type: 'title',
    },
    {
      id: 'custom.id',
      label: '组件ID',
      type: 'input',
      options: {
        disabled: true,
      },
    },
    {
      id: 'custom.name',
      label: '组件名',
      type: 'input',
    },
    {
      label: '尺寸',
      type: 'title',
    },
    {
      id: 'custom.width',
      label: '宽',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Infinity,
      },
    },
    {
      id: 'custom.height',
      label: '高',
      type: 'inputNumber',
      options: {
        min: 0,
        max: Infinity,
      },
    },
    {
      label: '位置',
      type: 'title',
    },
    {
      id: 'custom.x',
      label: 'x坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 1920,
      },
    },
    {
      id: 'custom.y',
      label: 'y坐标',
      type: 'inputNumber',
      options: {
        min: 0,
        max: 850,
      },
    },
    {
      label: '样式配置',
      type: 'title',
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
          value: 'none',
        },
        {
          label: '直线',
          value: 'solid',
        },
        {
          label: '虚线',
          value: 'dashed',
        },
        {
          label: '圆点线',
          value: 'dotted',
        },
        {
          label: '双实线',
          value: 'double',
        },
      ],
    },
    {
      id: 'style.borderColor',
      label: '边框颜色',
      type: 'color',
    },
    {
      id: 'style.backgroundColor',
      label: '背景颜色',
      type: 'color',
    },
  ],
};
// 图表标题通用配置
const chartTitle = {
  show: true,
  text: 'chart图',
  link: '',
  target: 'blank',
  textStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 18,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  subtext: '',
  sublink: '',
  subtarget: 'blank',
  subtextStyle: {
    color: '#aaa',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'left',
    verticalAlign: 'auto',
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  textAlign: 'auto',
  textVerticalAlign: 'auto',
  padding: [5, 5, 5, 5],
  itemGap: 10,
  // left: 'auto',
  // top: 'auto',
  // right: 'auto',
  // bottom: 'auto',
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 0,
  borderRadius: [5, 5, 5, 5],
  shadowBlur: 10,
  shadowColor: '#fff',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};
// 图表图例通用配置
const chartLegend = {
  show: true,
  type: 'plain',
  left: 'right',
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  // width: 'auto',
  // height: 'auto',
  orient: 'horizontal',
  align: 'auto',
  padding: [5, 5, 5, 5],
  itemGap: 10,
  itemWidth: 25,
  itemHeight: 14,
  selectedMode: true,
  inactiveColor: '#ccc',
  textStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: [0, 0, 0, 0],
    padding: [5, 5, 5, 5],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  icon: '',
  // data: [],
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 0,
  borderRadius: [0, 0, 0, 0],
  shadowBlur: 10,
  shadowColor: '#fff',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  pageButtonItemGap: 5,
  pageButtonGap: 5,
  pageButtonPosition: 'end',
  pageIconColor: '#2f4554',
  pageIconInactiveColor: '#aaa',
  pageIconSize: 15,
  pageTextStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  animation: true,
  animationDurationUpdate: 800,
  selectorLabel: {
    show: true,
    distance: 5,
    // rotate: 0,
    // offset: [0,0],
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  selectorPosition: 'auto',
  selectorItemGap: 7,
  selectorButtonGap: 10,
};
// 图表直角网格通用配置
const chartGrid = {
  show: false,
  left: '10%',
  top: '10%',
  right: '10%',
  bottom: '10%',
  containLabel: false,
  backgroundColor: 'transparent',
  borderColor: '#ccc',
  borderWidth: 1,
  shadowBlur: 0,
  shadowColor: 'transparent',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
};
// 图表x轴通用配置
const chartxAxis = {
  show: true,
  type: 'category',
  position: 'bottom',
  offset: 0,
  name: '',
  nameLocation: 'end',
  nameTextStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  nameGap: 15,
  nameRotate: 0,
  inverse: false,
  splitNumber: 5,
  axisLine: {
    show: true,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  axisTick: {
    show: true,
    inside: false,
    length: 5,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  minorTick: {
    show: false,
    splitNumber: 5,
    length: 3,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  axisLabel: {
    show: true,
    inside: false,
    margin: 8,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  splitLine: {
    show: false,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  minorSplitLine: {
    show: false,
  },
  splitArea: {
    show: false,
  },
  // axisPointer: {
  //   show: false,
  //   type: 'line',
  //   label: {
  //     show: false,
  //     margin: 3,
  //     color: '#fff',
  //     fontStyle: 'normal',
  //     fontWeight: 'normal',
  //     fontFamily: 'sans-serif',
  //     fontSize: 12,
  //     textBorderColor: 'transparent',
  //     textBorderWidth: 0,
  //     textShadowColor: 'transparent',
  //     textShadowBlur: 0,
  //     textShadowOffsetX: 0,
  //     textShadowOffsetY: 0,
  //     backgroundColor: 'transparent',
  //     borderColor: 'transparent',
  //     borderWidth: 1,
  //     borderRadius: [0,0,0,0],
  //     padding: [0,0,0,0],
  //     shadowColor: 'transparent',
  //     shadowBlur: 0,
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //   },
  //   lineStyle: {
  //     color: '#555',
  //     width: 1,
  //     type: 'solid',
  //     shadowBlur: 0,
  //     shadowColor: 'transparent',
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //     opacity: 0,
  //   },
  //   shadowStyle: {
  //     color: 'rgba(150,150,150,0.3)',
  //     shadowBlur: 0,
  //     shadowColor: 'transparent',
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //     opacity: 0,
  //   }
  // },
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
};
// 图表y轴通用配置
const chartyAxis = {
  show: true,
  type: 'value',
  position: 'left',
  offset: 0,
  name: '',
  nameLocation: 'end',
  nameTextStyle: {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  nameGap: 15,
  nameRotate: 0,
  inverse: false,
  boundaryGap: true,
  splitNumber: 5,
  axisLine: {
    show: true,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  axisTick: {
    show: true,
    inside: false,
    length: 5,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  minorTick: {
    show: false,
    splitNumber: 5,
    length: 3,
    lineStyle: {
      color: '#333',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  axisLabel: {
    show: true,
    inside: false,
    margin: 30,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
    shadowColor: 'transparent',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: '#ccc',
      width: 1,
      type: 'solid',
      shadowBlur: 0,
      shadowColor: 'transparent',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
  },
  minorSplitLine: {
    show: false,
    color: '#eee',
    width: 1,
    type: 'solid',
    shadowBlur: 0,
    shadowColor: 'transparent',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    opacity: 1,
  },
  splitArea: {
    show: false,
  },
  // axisPointer: {
  //   show: false,
  //   type: 'line',
  //   label: {
  //     show: false,
  //     margin: 3,
  //     color: '#fff',
  //     fontStyle: 'normal',
  //     fontWeight: 'normal',
  //     fontFamily: 'sans-serif',
  //     fontSize: 12,
  //     textBorderColor: 'transparent',
  //     textBorderWidth: 0,
  //     textShadowColor: 'transparent',
  //     textShadowBlur: 0,
  //     textShadowOffsetX: 0,
  //     textShadowOffsetY: 0,
  //     backgroundColor: 'transparent',
  //     borderColor: 'transparent',
  //     borderWidth: 1,
  //     borderRadius: [0,0,0,0],
  //     padding: [0,0,0,0],
  //     shadowColor: 'transparent',
  //     shadowBlur: 0,
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //   },
  //   lineStyle: {
  //     color: '#555',
  //     width: 1,
  //     type: 'solid',
  //     shadowBlur: 0,
  //     shadowColor: 'transparent',
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //     opacity: 1,
  //   },
  //   shadowStyle: {
  //     color: 'rgba(150,150,150,0.3)',
  //     shadowBlur: 0,
  //     shadowColor: 'transparent',
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0,
  //     opacity: 1,
  //   }
  // },
};
// 图表tooltip通用配置
const chartTooltip = {
  show: true,
  trigger: 'item',
  showContent: true,
  triggerOn: 'mousemove',
  backgroundColor: 'rgba(50,50,50,0.7)',
  borderColor: '#333',
  borderWidth: 0,
  padding: [5, 5, 5, 5],
  textStyle: {
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
  },
  axisPointer: {
    type: 'line',
    label: {
      show: false,
      margin: 3,
      color: '#333',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontFamily: 'sans-serif',
      fontSize: 12,
      textBorderColor: 'transparent',
      textBorderWidth: 0,
      textShadowColor: 'transparent',
      textShadowBlur: 0,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      padding: [5, 7, 5, 7],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
      shadowBlur: 3,
      shadowColor: '#aaa',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
    },
    lineStyle: {
      color: '#555',
      width: 1,
      type: 'solid',
      shadowBlur: 3,
      shadowColor: '#aaa',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
    shadowStyle: {
      color: '#555',
      width: 1,
      type: 'solid',
      shadowBlur: 3,
      shadowColor: '#aaa',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
    crossStyle: {
      color: '#555',
      width: 1,
      type: 'solid',
      shadowBlur: 3,
      shadowColor: '#aaa',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1,
    },
    animation: true,
  },
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
      fontColor: '#606266',
      eventListeners: {}
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '输入框', height: 50, iconname: 'iconinput' }),
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
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'text',
            label: 'text',
          },
          {
            value: 'password',
            label: 'password',
          },
          {
            value: 'textarea',
            label: 'textarea',
          },
          {
            value: 'url',
            label: 'url',
          },
          {
            value: 'email',
            label: 'email',
          },
          {
            value: 'date',
            label: 'date',
          },
          {
            value: 'number',
            label: 'number',
          },
          {
            value: 'tel',
            label: 'tel',
          },
        ],
      },
      {
        id: 'props.size',
        label: '尺寸',
        type: 'select',
        list: [
          {
            value: 'default',
            label: 'default',
          },
          {
            value: 'large',
            label: 'large',
          },
          {
            value: 'small',
            label: 'small',
          },
        ],
      },
      {
        id: 'props.placeholder',
        label: '占位文本',
        type: 'input',
      },
      {
        id: 'props.clearable',
        label: '清空按钮',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏',
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用',
      },
      {
        id: 'props.readonly',
        label: '只读',
        type: 'switch',
      },
      {
        id: 'props.fontSize',
        label: '文字大小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      ,
      {
        id: 'props.fontColor',
        label: '文字颜色',
        type: 'color',
      },
      {
        id: 'props.prefix',
        label: '头部图标',
        type: 'icon',
      },
      {
        id: 'props.suffix',
        label: '尾部图标',
        type: 'icon',
      },
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.eventListeners',
        label: '',
        type: 'eventSetting'
      },
    ]),
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
      controlsPosition: '',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '计数器', height: 50, iconname: 'iconfuhao-shuzishurukuang' }),
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
      {
        id: 'props.placeholder',
        label: '占位文本',
        type: 'input',
      },
      {
        id: 'props.step',
        label: '步长',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用',
      },
      {
        id: 'props.controls',
        label: '控制按钮',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏',
      },
      {
        id: 'props.controlsPosition',
        label: '按钮位置',
        type: 'select',
        list: [
          {
            value: '默认',
            label: '',
          },
          {
            value: 'right',
            label: '右',
          },
        ],
      },
    ]),
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
    custom: Object.assign({}, commonConfig.custom, { name: '单选框', height: 35, iconname: 'icondanxuananniuzu' }),
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
          disabled: false,
        },
        {
          id: '2',
          value: 'checkbox2',
          label: 'checkbox2',
          disabled: false,
        },
      ],
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '复选框', height: 50, iconname: 'iconfuxuankuang' }),
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
      {
        id: 'props.min',
        label: '最小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.max',
        label: '最大',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
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
    custom: Object.assign({}, commonConfig.custom, { name: '下拉框', height: 50, iconname: 'iconxialakuang' }),
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
          max: Infinity,
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
      inactiveColor: '#909399',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '开关', height: 35, width: 70, iconname: 'iconkaiguan' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭',
      },
      {
        id: 'props.width',
        label: '宽度',
        type: 'input',
      },
      {
        id: 'props.activeText',
        label: '打开描述',
        type: 'input',
      },
      {
        id: 'props.inactiveText',
        label: '关闭描述',
        type: 'input',
      },
      {
        id: 'props.activeColor',
        label: '打开颜色',
        type: 'color',
      },
      {
        id: 'props.inactiveColor',
        label: '关闭颜色',
        type: 'color',
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用',
      },
    ]),
  },
  {
    key: 'xaProgress',
    props: {
      percentage: 50,
      type: 'line',
      strokeWidth: 20,
      status: 'text',
      color: '',
      width: 126,
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '进度条', height: 50, width: 300, iconname: 'iconjindutiao' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.percentage',
        label: '当前值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: 100,
        },
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'line',
            label: 'line',
          },
          {
            value: 'circle',
            label: 'circle',
          },
        ],
      },
      {
        id: 'props.status',
        label: '状态',
        type: 'select',
        list: [
          {
            value: 'success',
            label: 'success',
          },
          {
            value: 'exception',
            label: 'exception',
          },
          {
            value: 'text',
            label: 'text',
          },
        ],
      },
      {
        id: 'props.strokeWidth',
        label: '进度条宽',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.color',
        label: '颜色',
        type: 'color',
      },
    ]),
  },
  {
    key: 'xaSlider',
    props: {
      value: 50,
      disabled: false,
      min: 0,
      max: 100,
      step: 1,
      showTooltip: true,
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '滑块', height: 50, width: 300, iconname: 'iconhuakuai-' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.value',
        label: '当前值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.min',
        label: '最小',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.max',
        label: '最大',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.step',
        label: '步数',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.showTooltip',
        label: '提示框',
        type: 'switch',
        activeText: '显示',
        inactiveText: '关闭',
      },
    ]),
  },
  {
    key: 'xaTag',
    props: {
      value: '标签1',
      type: 'success',
      hit: false,
      closable: false,
      color: '',
      size: 'mini',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '标签', height: 40, width: 65, iconname: 'icontag' }),
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
        id: 'props.hit',
        label: '边框描边',
        type: 'switch',
        activeText: '显示',
        inactiveText: '关闭',
      },
      {
        id: 'props.closable',
        label: '可关闭',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'success',
            label: 'success',
          },
          {
            value: 'info',
            label: 'info',
          },
          {
            value: 'warning',
            label: 'warning',
          },
          {
            value: 'danger',
            label: 'danger',
          },
        ],
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
        id: 'props.color',
        label: '背景色',
        type: 'color',
      },
    ]),
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
      effect: 'light',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '警告', height: 70, width: 450, iconname: 'iconjinggao' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.title',
        label: '标题',
        type: 'input',
      },
      {
        id: 'props.description',
        label: '描述',
        type: 'input',
      },
      {
        id: 'props.closeText',
        label: '关闭文字',
        type: 'input',
      },
      {
        id: 'props.closable',
        label: '是否关闭',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.showIcon',
        label: '显示图标',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.center',
        label: '是否居中',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.effect',
        label: '主题',
        type: 'select',
        list: [
          {
            value: 'light',
            label: 'light',
          },
          {
            value: 'dark',
            label: 'dark',
          },
        ],
      },
    ]),
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
  },
  {
    key: 'xaCalendar',
    props: {
      value: new Date(),
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '日历', height: 200, width: 450, iconname: 'iconrili' }),
    options: [].concat(commonConfig.options),
  },
  {
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
  },
  {
    key: 'xaColorPicker',
    props: {
      value: '#409EFF',
      disabled: false,
      size: 'mini',
      showAlpha: false,
      colorFormat: 'rgb',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '颜色选择器', height: 50, width: 50, iconname: 'iconyanse' }),
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
        id: 'props.showAlpha',
        label: '透明度',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
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
        id: 'props.colorFormat',
        label: '颜色格式',
        type: 'select',
        list: [
          {
            value: 'hsl',
            label: 'hsl',
          },
          {
            value: 'hsv',
            label: 'hsv',
          },
          {
            value: 'hex',
            label: 'hex',
          },
          {
            value: 'rgb',
            label: 'rgb',
          },
        ],
      },
    ]),
  },
  {
    key: 'xaRate',
    props: {
      value: 0,
      disabled: false,
      max: 5,
      allowHalf: false,
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '评分', height: 50, width: 150, iconname: 'iconpingfen' }),
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
        id: 'props.allowHalf',
        label: '是否半选',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.max',
        label: '最大值',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
    ]),
  },
  {
    key: 'xaTimePicker',
    props: {
      value: '',
      disabled: false,
      readonly: false,
      editable: false,
      clearable: false,
      size: 'mini',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '时间选择器', height: 50, width: 230, iconname: 'iconshijian' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用',
      },
      {
        id: 'props.readonly',
        label: '是否只读',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.editable',
        label: '是否编辑',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.clearable',
        label: '是否清除',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
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
    ]),
  },
  {
    key: 'xaDatePicker',
    props: {
      value: '',
      disabled: false,
      readonly: false,
      editable: false,
      clearable: false,
      size: 'mini',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '日期选择器', height: 50, width: 230, iconname: 'iconriqi' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.disabled',
        label: '禁用状态',
        type: 'switch',
        activeText: '禁用',
        inactiveText: '启用',
      },
      {
        id: 'props.readonly',
        label: '是否只读',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.editable',
        label: '是否编辑',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.clearable',
        label: '是否清除',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
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
    ]),
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
      size: 'mini',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '按钮', height: 50, width: 100, iconname: 'iconanniu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.content',
        label: '按钮内容',
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
        id: 'props.plain',
        label: '朴素按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.round',
        label: '圆角按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.circle',
        label: '圆形按钮',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
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
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'primary',
            label: 'primary',
          },
          {
            value: 'success',
            label: 'success',
          },
          {
            value: 'warning',
            label: 'warning',
          },
          {
            value: 'danger',
            label: 'danger',
          },
          {
            value: 'info',
            label: 'info',
          },
          {
            value: 'text',
            label: 'text',
          },
        ],
      },
    ]),
  },
  {
    key: 'xaLink',
    props: {
      content: '链接',
      disabled: false,
      type: 'primary',
      underline: false,
      href: '',
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '链接', height: 35, width: 80, iconname: 'iconlianjie' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.content',
        label: '链接内容',
        type: 'input',
      },
      {
        id: 'props.href',
        label: '地址',
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
        id: 'props.underline',
        label: '下划线',
        type: 'switch',
        activeText: '显示',
        inactiveText: '隐藏',
      },
      {
        id: 'props.type',
        label: '类型',
        type: 'select',
        list: [
          {
            value: 'primary',
            label: 'primary',
          },
          {
            value: 'success',
            label: 'success',
          },
          {
            value: 'warning',
            label: 'warning',
          },
          {
            value: 'danger',
            label: 'danger',
          },
          {
            value: 'info',
            label: 'info',
          },
        ],
      },
    ]),
  },
  {
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
                  label: '三级 1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1',
                },
              ],
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1',
                },
              ],
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1',
                },
              ],
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1',
                },
              ],
            },
          ],
        },
      ],
      props: {
        children: 'children',
        label: 'label',
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
      draggable: false,
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '树形控件', height: 160, width: 150, iconname: 'iconjuxingkaobei' }),
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
        id: 'props.indent',
        label: '水平缩进',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.highlightCurrent',
        label: '高亮选中',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.defaultExpandAll',
        label: '默认展开',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.showCheckbox',
        label: '是否选择',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
      {
        id: 'props.lazy',
        label: '懒加载',
        type: 'switch',
        activeText: '开启',
        inactiveText: '关闭',
      },
      {
        id: 'props.draggable',
        label: '拖拽',
        type: 'switch',
        activeText: '是',
        inactiveText: '否',
      },
    ]),
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
          iconClass: 'el-icon-location',
        },
        {
          title: '导航2',
          iconClass: 'el-icon-menu',
          index: '2',
          children: [
            {
              index: '2-1',
              title: '导航2-1',
              disabled: false,
            },
            {
              index: '2-2',
              title: '导航2-2',
              disabled: false,
            },
          ],
        },
        {
          title: '导航3',
          iconClass: 'el-icon-menu',
          index: '3',
          children: [
            {
              index: '3-1',
              title: '导航3-1',
              disabled: false,
            },
            {
              index: '3-2',
              title: '导航3-2',
              disabled: false,
            },
          ],
        },
      ],
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '菜单', height: 350, width: 170, iconname: 'iconmenu-line' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.children',
        type: 'code',
        label: '数据源',
        options: {
          btnName: '数据源编辑',
        },
      },
      {
        id: 'props.defaultActive',
        label: '激活菜单',
        type: 'input',
      },
      {
        id: 'props.mode',
        label: '模式',
        type: 'select',
        list: [
          {
            value: 'horizontal',
            label: 'horizontal',
          },
          {
            value: 'vertical',
            label: 'vertical',
          },
        ],
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
        inactiveText: '否',
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
        type: 'color',
      },
      {
        id: 'props.textColor',
        label: '文字色',
        type: 'color',
      },
      {
        id: 'props.activeTextColor',
        label: '激活文字色',
        type: 'color',
      },
    ]),
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
          max: Infinity,
        },
      },
      {
        id: 'props.rowHeight',
        label: '行高',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.marginTopBottom',
        label: '上下边距',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
        },
      },
      {
        id: 'props.marginLeftRight',
        label: '左右边距',
        type: 'inputNumber',
        options: {
          min: 0,
          max: Infinity,
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
  },
  {
    key: 'xaEchartsLine',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        grid: { ...chartGrid },
        xAxis: { ...chartxAxis },
        yAxis: { ...chartyAxis },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: '系列1',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '折线图', height: 300, width: 400, iconname: 'iconzhexiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsBar',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        grid: { ...chartGrid },
        xAxis: { ...chartxAxis },
        yAxis: { ...chartyAxis },
        tooltip: { ...chartTooltip },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '柱状图', height: 300, width: 400, iconname: 'icontubiaozhuzhuangtu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsBarStack',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        grid: { ...chartGrid },
        xAxis: { ...chartxAxis },
        yAxis: { ...chartyAxis },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: '数据1',
            type: 'bar',
            stack: 'all',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '数据2',
            type: 'bar',
            stack: 'all',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '数据3',
            type: 'bar',
            stack: 'all',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '数据4',
            type: 'bar',
            stack: 'all',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '堆叠柱状图', height: 300, width: 400, iconname: 'iconduidiezhuzhuangtu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsPie',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: '饼图数据统计',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '数据1' },
              { value: 310, name: '数据2' },
              { value: 234, name: '数据3' },
              { value: 135, name: '数据4' },
              { value: 1548, name: '数据5' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '饼图', height: 300, width: 400, iconname: 'iconbingtu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsScatter',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        grid: { ...chartGrid },
        xAxis: { ...chartxAxis },
        yAxis: { ...chartyAxis },
        tooltip: { ...chartTooltip },
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68],
            ],
            type: 'scatter',
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '散点图', height: 300, width: 400, iconname: 'iconsandiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsMap',
    type: 'chart',
    props: {
      chartConfig: {},
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '地图', height: 300, width: 500, iconname: 'iconditu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
    ]),
  },
  {
    key: 'xaEchartsRadar',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        radar: {
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: '销售（sales）', max: 6500 },
            { name: '管理（Administration）', max: 16000 },
            { name: '信息技术（Information Techology）', max: 30000 },
            { name: '客服（Customer Support）', max: 38000 },
            { name: '研发（Development）', max: 52000 },
            { name: '市场（Marketing）', max: 25000 },
          ],
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）',
              },
            ],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '雷达图', height: 300, width: 400, iconname: 'iconleidatu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsBoxplot',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        grid: { ...chartGrid },
        xAxis: { ...chartxAxis },
        yAxis: { ...chartyAxis },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            data: [
              [655, 850, 940, 980, 1070],
              [760, 800, 845, 885, 960],
              [780, 840, 855, 880, 940],
              [720, 767.5, 815, 865, 920],
              [740, 807.5, 810, 870, 950],
            ],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '盒须图', height: 300, width: 400, iconname: 'iconxiangxiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsTree',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: [
          {
            type: 'tree',

            data: [
              {
                name: 'flare',
                children: [
                  {
                    name: 'analytics',
                    children: [
                      {
                        name: 'cluster',
                        children: [
                          { name: 'AgglomerativeCluster', value: 3938 },
                          { name: 'CommunityStructure', value: 3812 },
                          { name: 'HierarchicalCluster', value: 6714 },
                          { name: 'MergeEdge', value: 743 },
                        ],
                      },
                      {
                        name: 'graph',
                        children: [
                          { name: 'BetweennessCentrality', value: 3534 },
                          { name: 'LinkDistance', value: 5731 },
                          { name: 'MaxFlowMinCut', value: 7840 },
                          { name: 'ShortestPaths', value: 5914 },
                          { name: 'SpanningTree', value: 3416 },
                        ],
                      },
                      { name: 'optimization', children: [{ name: 'AspectRatioBanker', value: 7074 }] },
                    ],
                  },
                  {
                    name: 'animate',
                    children: [
                      { name: 'Easing', value: 17010 },
                      { name: 'FunctionSequence', value: 5842 },
                      {
                        name: 'interpolate',
                        children: [
                          { name: 'ArrayInterpolator', value: 1983 },
                          { name: 'ColorInterpolator', value: 2047 },
                          { name: 'DateInterpolator', value: 1375 },
                          { name: 'Interpolator', value: 8746 },
                        ],
                      },
                      { name: 'ISchedulable', value: 1041 },
                      { name: 'Parallel', value: 5176 },
                      { name: 'Pause', value: 449 },
                    ],
                  },
                  {
                    name: 'data',
                    children: [
                      {
                        name: 'converters',
                        children: [
                          { name: 'Converters', value: 721 },
                          { name: 'DelimitedTextConverter', value: 4294 },
                        ],
                      },
                      { name: 'DataField', value: 1759 },
                      { name: 'DataSchema', value: 2165 },
                    ],
                  },
                  {
                    name: 'display',
                    children: [
                      { name: 'DirtySprite', value: 8833 },
                      { name: 'LineSprite', value: 1732 },
                    ],
                  },
                  { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },

                  {
                    name: 'vis',
                    children: [
                      {
                        name: 'axis',
                        children: [
                          { name: 'Axes', value: 1302 },
                          { name: 'Axis', value: 24593 },
                          { name: 'AxisGridLine', value: 652 },
                          { name: 'AxisLabel', value: 636 },
                          { name: 'CartesianAxes', value: 6703 },
                        ],
                      },
                      {
                        name: 'controls',
                        children: [
                          { name: 'AnchorControl', value: 2138 },
                          { name: 'ClickControl', value: 3824 },
                          { name: 'Control', value: 1353 },
                          { name: 'ControlList', value: 4665 },
                        ],
                      },
                      {
                        name: 'data',
                        children: [
                          { name: 'Data', value: 20544 },
                          { name: 'DataList', value: 19788 },
                          { name: 'DataSprite', value: 10349 },
                          { name: 'EdgeSprite', value: 3301 },
                          { name: 'NodeSprite', value: 19382 },
                          {
                            name: 'render',
                            children: [
                              { name: 'ArrowType', value: 698 },
                              { name: 'EdgeRenderer', value: 5569 },
                              { name: 'IRenderer', value: 353 },
                              { name: 'ShapeRenderer', value: 2247 },
                            ],
                          },
                          { name: 'ScaleBinding', value: 11275 },
                          { name: 'Tree', value: 7147 },
                          { name: 'TreeBuilder', value: 9930 },
                        ],
                      },
                      {
                        name: 'events',
                        children: [
                          { name: 'DataEvent', value: 2313 },
                          { name: 'SelectionEvent', value: 1880 },
                          { name: 'TooltipEvent', value: 1701 },
                          { name: 'VisualizationEvent', value: 1117 },
                        ],
                      },
                      {
                        name: 'legend',
                        children: [
                          { name: 'Legend', value: 20859 },
                          { name: 'LegendItem', value: 4614 },
                          { name: 'LegendRange', value: 10530 },
                        ],
                      },
                      { name: 'Visualization', value: 16540 },
                    ],
                  },
                ],
              },
            ],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 7,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9,
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
              },
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '树图', height: 300, width: 400, iconname: 'iconshutu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsTreeMap',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: 'Disk Usage',
            type: 'treemap',
            visibleMin: 300,
            label: {
              show: true,
              formatter: '{b}',
            },
            itemStyle: {
              borderColor: '#fff',
            },
            levels: [
              {
                itemStyle: {
                  borderWidth: 0,
                  gapWidth: 5,
                },
              },
              {
                itemStyle: {
                  gapWidth: 1,
                },
              },
              {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                  gapWidth: 1,
                  borderColorSaturation: 0.6,
                },
              },
            ],
            data: [
              { value: 40, name: 'Accessibility', path: 'Accessibility' },
              {
                value: 180,
                name: 'Accounts',
                path: 'Accounts',
                children: [
                  {
                    value: 76,
                    name: 'Access',
                    path: 'Accounts/Access',
                    children: [
                      { value: 12, name: 'DefaultAccessPlugin.bundle', path: 'Accounts/Access/DefaultAccessPlugin.bundle' },
                      { value: 28, name: 'FacebookAccessPlugin.bundle', path: 'Accounts/Access/FacebookAccessPlugin.bundle' },
                      { value: 20, name: 'LinkedInAccessPlugin.bundle', path: 'Accounts/Access/LinkedInAccessPlugin.bundle' },
                      { value: 16, name: 'TencentWeiboAccessPlugin.bundle', path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle' },
                    ],
                  },
                  {
                    value: 92,
                    name: 'Authentication',
                    path: 'Accounts/Authentication',
                    children: [
                      { value: 24, name: 'FacebookAuthenticationPlugin.bundle', path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle' },
                      { value: 16, name: 'LinkedInAuthenticationPlugin.bundle', path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle' },
                      { value: 20, name: 'TencentWeiboAuthenticationPlugin.bundle', path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle' },
                      { value: 16, name: 'TwitterAuthenticationPlugin.bundle', path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle' },
                      { value: 16, name: 'WeiboAuthenticationPlugin.bundle', path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle' },
                    ],
                  },
                  { value: 12, name: 'Notification', path: 'Accounts/Notification', children: [{ value: 12, name: 'SPAAccountsNotificationPlugin.bundle', path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle' }] },
                ],
              },
            ],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '矩形树图', height: 500, width: 500, iconname: 'iconjuxingshutu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsSunburst',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: {
          type: 'sunburst',
          data: [
            {
              name: 'Grandpa',
              children: [
                {
                  name: 'Uncle Leo',
                  value: 15,
                  children: [
                    {
                      name: 'Cousin Jack',
                      value: 2,
                    },
                    {
                      name: 'Cousin Mary',
                      value: 5,
                      children: [
                        {
                          name: 'Jackson',
                          value: 2,
                        },
                      ],
                    },
                    {
                      name: 'Cousin Ben',
                      value: 4,
                    },
                  ],
                },
                {
                  name: 'Father',
                  value: 10,
                  children: [
                    {
                      name: 'Me',
                      value: 5,
                    },
                    {
                      name: 'Brother Peter',
                      value: 1,
                    },
                  ],
                },
              ],
            },
            {
              name: 'Nancy',
              children: [
                {
                  name: 'Uncle Nike',
                  children: [
                    {
                      name: 'Cousin Betty',
                      value: 1,
                    },
                    {
                      name: 'Cousin Jenny',
                      value: 2,
                    },
                  ],
                },
              ],
            },
          ],
          radius: [0, '90%'],
          label: {
            rotate: 'radial',
          },
        },
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '旭日图', height: 500, width: 500, iconname: 'iconxuritu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsFunnel',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: '访问' },
              { value: 40, name: '咨询' },
              { value: 20, name: '订单' },
              { value: 80, name: '点击' },
              { value: 100, name: '展现' },
            ],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '漏斗图', height: 350, width: 500, iconname: 'iconloudoutu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsGauge',
    type: 'chart',
    props: {
      chartConfig: {
        title: { ...chartTitle },
        legend: { ...chartLegend },
        tooltip: { ...chartTooltip },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }],
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '仪表盘', height: 350, width: 500, iconname: 'iconyibiaopan' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
  {
    key: 'xaEchartsBarD',
    type: 'chart',
    props: {
      chartConfig: {
        tooltip: { ...chartTooltip },
        visualMap: {
          max: 20,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
          },
        },
        xAxis3D: {
          type: 'category',
          data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
        },
        yAxis3D: {
          type: 'category',
          data: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
        },
        zAxis3D: {
          type: 'value',
        },
        grid3D: {
          boxWidth: 200,
          boxDepth: 80,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true,
            },
            ambient: {
              intensity: 0.3,
            },
          },
        },
        series: [
          {
            type: 'bar3D',
            data: [{ value: [0, 0, 5] }, { value: [1, 0, 1] }, { value: [2, 0, 0] }, { value: [3, 0, 0] }, { value: [4, 0, 0] }, { value: [5, 0, 0] }, { value: [6, 0, 0] }, { value: [7, 0, 0] }, { value: [8, 0, 0] }, { value: [9, 0, 0] }, { value: [10, 0, 0] }, { value: [11, 0, 2] }, { value: [12, 0, 4] }, { value: [13, 0, 1] }, { value: [14, 0, 1] }, { value: [15, 0, 3] }, { value: [16, 0, 4] }],
            shading: 'lambert',

            label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1,
              },
            },

            emphasis: {
              label: {
                textStyle: {
                  fontSize: 20,
                  color: '#900',
                },
              },
              itemStyle: {
                color: '#900',
              },
            },
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '3D柱状图', height: 350, width: 500, iconname: 'icontubiaozhuzhuangtu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      // {
      //   id: 'props.chartConfig',
      //   label: '',
      //   type: 'chartStyleSetting'
      // }
    ]),
  },
  {
    key: 'xaEchartsMapD',
    type: 'chart',
    props: {
      chartConfig: {},
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '3D地图', height: 300, width: 500, iconname: 'iconditu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
    ]),
  },
  {
    key: 'xaEchartsScatterD',
    type: 'chart',
    props: {
      chartConfig: {
        grid3D: {},
        xAxis3D: {
          type: 'category',
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
          dimensions: ['Income', 'Life Expectancy', 'Population', 'Country', { name: 'Year', type: 'ordinal' }],
          source: [
            ['Income', 'Life Expectancy', 'Population', 'Country', 'Year'],
            [815, 34.05, 351014, 'Australia', 1800],
            [1314, 39, 645526, 'Canada', 1800],
            [985, 32, 321675013, 'China', 1800],
            [864, 32.2, 345043, 'Cuba', 1800],
            [1244, 36.5731262, 977662, 'Finland', 1800],
            [1803, 33.96717024, 29355111, 'France', 1800],
            [1639, 38.37, 22886919, 'Germany', 1800],
            [926, 42.84559912, 61428, 'Iceland', 1800],
            [1052, 25.4424, 168574895, 'India', 1800],
            [1050, 36.4, 30294378, 'Japan', 1800],
            [579, 26, 4345000, 'North Korea', 1800],
            [576, 25.8, 9395000, 'South Korea', 1800],
            [658, 34.05, 100000, 'New Zealand', 1800],
            [1278, 37.91620899, 868570, 'Norway', 1800],
            [1213, 35.9, 9508747, 'Poland', 1800],
            [1430, 29.5734572, 31088398, 'Russia', 1800],
            [1221, 35, 9773456, 'Turkey', 1800],
            [3431, 38.6497603, 12327466, 'United Kingdom', 1800],
            [2128, 39.41, 6801854, 'United States', 1800],
            [834, 34.05, 342440, 'Australia', 1810],
            [1400, 39.01496774, 727603, 'Canada', 1810],
            [985, 32, 350542958, 'China', 1810],
            [970, 33.64, 470176, 'Cuba', 1810],
            [1267, 36.9473378, 1070625, 'Finland', 1810],
            [1839, 37.4, 30293172, 'France', 1810],
            [1759, 38.37, 23882461, 'Germany', 1810],
            [928, 43.13915533, 61428, 'Iceland', 1810],
            [1051, 25.4424, 171940819, 'India', 1810],
            [1064, 36.40397538, 30645903, 'Japan', 1810],
            [573, 26, 4345000, 'North Korea', 1810],
            [570, 25.8, 9395000, 'South Korea', 1810],
            [659, 34.05, 100000, 'New Zealand', 1810],
            [1299, 36.47500606, 918398, 'Norway', 1810],
            [1260, 35.9, 9960687, 'Poland', 1810],
            [1447, 29.5734572, 31088398, 'Russia', 1810],
            [1223, 35, 9923007, 'Turkey', 1810],
          ],
        },
        series: [
          {
            type: 'scatter3D',
            symbolSize: 2.5,
            encode: {
              x: 'Country',
              y: 'Life Expectancy',
              z: 'Income',
              tooltip: [0, 1, 2, 3, 4],
            },
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '3D散点图', height: 300, width: 500, iconname: 'iconsandiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
    ]),
  },
  {
    key: 'xaEchartsSurfaceD',
    type: 'chart',
    props: {
      chartConfig: {
        tooltip: {},
        visualMap: {
          show: false,
          dimension: 2,
          min: -1,
          max: 1,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
          },
        },
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        grid3D: {},
        series: [
          {
            type: 'surface',
            parametric: true,
            // shading: 'albedo',
            parametricEquation: {
              u: {
                min: -Math.PI,
                max: Math.PI,
                step: Math.PI / 20,
              },
              v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 20,
              },
              x: function(u, v) {
                return Math.sin(v) * Math.sin(u);
              },
              y: function(u, v) {
                return Math.sin(v) * Math.cos(u);
              },
              z: function(u, v) {
                return Math.cos(v);
              },
            },
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '3D曲面', height: 300, width: 500, iconname: 'iconB-qumiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
    ]),
  },
  {
    key: 'xaEchartsLineD',
    type: 'chart',
    props: {
      chartConfig: {
        tooltip: {},
        backgroundColor: '#fff',
        visualMap: {
          show: false,
          dimension: 2,
          min: 0,
          max: 30,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
          },
        },
        xAxis3D: {
          type: 'value',
        },
        yAxis3D: {
          type: 'value',
        },
        zAxis3D: {
          type: 'value',
        },
        grid3D: {
          viewControl: {
            projection: 'orthographic',
          },
        },
        series: [
          {
            type: 'line3D',
            data: (function() {
              var data = [];
              for (var t = 0; t < 10; t += 0.001) {
                var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
                var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
                var z = t + 2.0 * Math.sin(75 * t);
                data.push([x, y, z]);
              }
              return data;
            })(),
            lineStyle: {
              width: 4,
            },
          },
        ],
      },
    },
    style: Object.assign({}, commonConfig.style),
    custom: Object.assign({}, commonConfig.custom, { name: '3D折线图', height: 300, width: 400, iconname: 'iconzhexiantu' }),
    options: [].concat(commonConfig.options, [
      {
        label: '属性配置',
        type: 'title',
      },
      {
        id: 'props.chartConfig',
        label: '',
        type: 'chartStyleSetting',
      },
    ]),
  },
];

export default DEFAULT_CONFIG;
