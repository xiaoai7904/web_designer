// 标题通用配置
const titleConfig = [
  {
    id: 'chartOptions.title.show',
    label: '显示标题',
    type: 'switch'
  },
  {
    id: 'chartOptions.title.text',
    label: '标题文本',
    type: 'input'
  },
  {
    id: 'chartOptions.title.link',
    label: '标题文本链接',
    type: 'input'
  },
  {
    id: 'chartOptions.title.target ',
    label: '指定窗口打开',
    type: 'select',
    list: [
      {
        label: '当前窗口打开',
        value: 'self'
      },
      {
        label: '新窗口打开',
        value: 'blank'
      }
    ]
  },
  {
    id: 'chartOptions.title.textAlign',
    label: '标题水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'right',
        value: 'right'
      },
      {
        label: 'center',
        value: 'center'
      }
    ]
  },
  {
    id: 'chartOptions.title.textVerticalAlign',
    label: '标题垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'bottom',
        value: 'bottom'
      },
      {
        label: 'middle',
        value: 'middle'
      }
    ]
  },
  {
    id: 'chartOptions.title.padding',
    label: '标题内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.title.itemGap',
    label: '主副标题间距',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.backgroundColor',
    label: '标题背景色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.borderColor',
    label: '标题边框色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.borderWidth',
    label: '标题边框宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.borderRadius',
    label: '标题边框圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.title.shadowBlur',
    label: '标题阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.shadowColor',
    label: '标题阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.shadowOffsetX',
    label: '标题阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.shadowOffsetY',
    label: '标题阴影Y',
    type: 'inputNumber'
  },
  {
    label: '主标题文字样式',
    type: 'title'
  },
  {
    id: 'chartOptions.title.textStyle.color',
    label: '标题字体颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.textStyle.fontStyle',
    label: '标题字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.title.textStyle.fontWeight',
    label: '标题字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.title.textStyle.fontFamily',
    label: '标题字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.title.textStyle.fontSize',
    label: '标题字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.textStyle.textBorderColor',
    label: '文字描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.textStyle.textBorderWidth',
    label: '文字描边宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.textStyle.textShadowColor',
    label: '文字阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.textStyle.textShadowBlur',
    label: '文字阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.textStyle.textShadowOffsetX',
    label: '文字阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.textStyle.textShadowOffsetY',
    label: '文字阴影Y',
    type: 'input'
  },
  {
    id: 'chartOptions.title.subtext',
    label: '副标题文本',
    type: 'input'
  },
  {
    id: 'chartOptions.title.sublink',
    label: '副标题链接',
    type: 'input'
  },
  {
    id: 'chartOptions.title.subtarget',
    label: '副标题打开方式',
    type: 'select',
    list: [
      {
        label: '当前窗口打开',
        value: 'self'
      },
      {
        label: '新窗口打开',
        value: 'blank'
      }
    ]
  },
  {
    label: '副标题文字样式',
    type: 'title'
  },
  {
    id: 'chartOptions.title.subtextStyle.color',
    label: '副标题颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.subtextStyle.fontStyle',
    label: '副标题字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.title.subtextStyle.fontWeight',
    label: '副标题字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      }
    ]
  },
  {
    id: 'chartOptions.title.subtextStyle.fontFamily',
    label: '副标题字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.title.subtextStyle.fontSize',
    label: '副标题字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.subtextStyle.align',
    label: '副标题水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.title.subtextStyle.verticalAlign',
    label: '副标题垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.title.subtextStyle.textBorderColor',
    label: '副标题描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.subtextStyle.textBorderWidth',
    label: '副标题描边宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.subtextStyle.textShadowColor',
    label: '副标题阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.title.subtextStyle.textShadowBlur',
    label: '副标题阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.subtextStyle.textShadowOffsetX',
    label: '副标题阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.title.subtextStyle.textShadowOffsetY',
    label: '副标题阴影Y',
    type: 'inputNumber'
  },
];
// 图例通用配置
const legendConfig = [
  {
    id: 'chartOptions.legend.show',
    label: '显示图例',
    type: 'switch'
  },
  {
    id: 'chartOptions.legend.type',
    label: '图例类型',
    type: 'select',
    list: [
      {
        label: 'plain',
        value: 'plain'
      },
      {
        label: 'scroll',
        value: 'scroll'
      }
    ]
  },
  {
    id: 'chartOptions.legend.left',
    label: '图例左侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.legend.top',
    label: '图例上侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.legend.right',
    label: '图例右侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.legend.bottom',
    label: '图例下侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.legend.orient',
    label: '图例布局朝向',
    type: 'select',
    list: [
      {
        label: 'horizontal',
        value: 'horizontal'
      },
      {
        label: 'vertical',
        value: 'vertical'
      }
    ]
  },
  {
    id: 'chartOptions.legend.align',
    label: '图例对齐方式',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.legend.padding',
    label: '图例内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.itemGap',
    label: '图例间隔',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.itemWidth',
    label: '图例宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.itemHeight',
    label: '图例高度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectedMode',
    label: '图例选择模式',
    type: 'switch'
  },
  {
    id: 'chartOptions.legend.inactiveColor',
    label: '图例关闭颜色',
    type: 'color'
  },
  {
    label: '图例的公用文本样式',
    type: 'title'
  },
  {
    id: 'chartOptions.legend.textStyle.color',
    label: '文字颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.fontStyle',
    label: '文字字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.legend.textStyle.fontWeight',
    label: '文字字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.legend.textStyle.fontFamily',
    label: '文字字体系列',
    type: 'select',
    list: [
      {
        label: 'serif',
        value: 'serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.legend.textStyle.fontSize',
    label: '文字字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.backgroundColor',
    label: '文字背景色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.borderColor',
    label: '文字边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.borderWidth',
    label: '文字边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.borderRadius',
    label: '文字圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.textStyle.padding',
    label: '文字内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.textStyle.shadowColor',
    label: '文字阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.shadowBlur',
    label: '文字阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.shadowOffsetX',
    label: '文字阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.shadowOffsetY',
    label: '文字阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.textBorderColor',
    label: '文字描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.textBorderWidth',
    label: '文字描边宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.textShadowColor',
    label: '文字描边阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.textStyle.textShadowBlur',
    label: '文字描边阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.textShadowOffsetX',
    label: '文字描边阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.textStyle.textShadowOffsetY',
    label: '文字描边阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.icon',
    label: '图例项的icon',
    type: 'input'
  },
  {
    id: 'chartOptions.legend.backgroundColor',
    label: '图例背景色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.borderColor',
    label: '图例边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.borderWidth',
    label: '图例边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.borderRadius',
    label: '图例边框圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.shadowBlur',
    label: '图例阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.shadowColor',
    label: '图例阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.shadowOffsetX',
    label: '阴影水平偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.shadowOffsetY',
    label: '阴影垂直偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageButtonItemGap',
    label: '按钮和分页间隔',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageButtonGap',
    label: '控制块和图例间隔',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageButtonPosition',
    label: '控制块和图例间隔',
    type: 'select',
    list: [
      {
        label: '控制块在右或下',
        value: 'end'
      },
      {
        label: '控制块在左或上',
        value: 'start'
      }
    ]
  },
  {
    id: 'chartOptions.legend.pageIconColor',
    label: '翻页按钮颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.pageIconInactiveColor',
    label: '翻页按钮不激活颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.pageIconSize',
    label: '翻页按钮大小',
    type: 'inputNumber'
  },
  {
    label: '图例页信息的文字样式',
    type: 'title'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.color',
    label: '分页字体颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.fontStyle',
    label: '分页字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.legend.pageTextStyle.fontWeight',
    label: '分页字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.legend.pageTextStyle.fontFamily',
    label: '分页字体系列',
    type: 'select',
    list: [
      {
        label: 'serif',
        value: 'serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.legend.pageTextStyle.fontSize',
    label: '分页字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textBorderColor',
    label: '分页边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textBorderWidth',
    label: '分页边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textShadowColor',
    label: '分页阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textShadowBlur',
    label: '分页阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textShadowOffsetX',
    label: '分页分页文字阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.pageTextStyle.textShadowOffsetY',
    label: '分页文字阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.animation',
    label: '图例翻页动画',
    type: 'switch'
  },
  {
    id: 'chartOptions.legend.animationDurationUpdate',
    label: '图例翻页动画时长',
    type: 'inputNumber'
  },
  {
    label: '选择器按钮的文本标签样式',
    type: 'title'
  },
  {
    id: 'chartOptions.legend.selectorLabel.show',
    label: '选择器按钮显示',
    type: 'switch'
  },
  {
    id: 'chartOptions.legend.selectorLabel.distance',
    label: '距离图形元素距离',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.color',
    label: '文字颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.fontStyle',
    label: '字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorLabel.fontWeight',
    label: '字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorLabel.fontFamily',
    label: '字体系列',
    type: 'select',
    list: [
      {
        label: 'serif',
        value: 'serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorLabel.fontSize',
    label: '字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.align',
    label: '水平对齐方式',
    type: 'select',
    list: [
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorLabel.verticalAlign',
    label: '垂直对齐方式',
    type: 'select',
    list: [
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorLabel.backgroundColor',
    label: '文字块背景色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.borderColor',
    label: '文字块边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.borderWidth',
    label: '文字块边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.borderRadius',
    label: '文字块边框圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.selectorLabel.padding',
    label: '文字块内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.legend.selectorLabel.shadowColor',
    label: '文字块阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.shadowBlur',
    label: '文字块阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.shadowOffsetX',
    label: '文字块阴影X偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.shadowOffsetY',
    label: '文字块阴影Y偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textBorderColor',
    label: '文字描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textBorderWidth',
    label: '文字描边宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textShadowColor',
    label: '文字描边阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textShadowBlur',
    label: '文字描边阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textShadowOffsetX',
    label: '文字描边阴影X偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorLabel.textShadowOffsetY',
    label: '文字描边阴影Y偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorPosition',
    label: '选择器位置',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'end',
        value: 'end'
      },
      {
        label: 'start',
        value: 'start'
      }
    ]
  },
  {
    id: 'chartOptions.legend.selectorItemGap',
    label: '选择器按钮间隔',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.legend.selectorButtonGap',
    label: '选择器按钮与图例间隔',
    type: 'inputNumber'
  }
];

// 直角坐标系内绘图网格grid通用配置
const grid = [
  {
    id: 'chartOptions.grid.show',
    label: '显示直角坐标系网格',
    type: 'switch'
  },
  {
    id: 'chartOptions.grid.left',
    label: '离容器左侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.grid.top',
    label: '离容器上侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.grid.right',
    label: '离容器右侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.grid.bottom',
    label: '离容器下侧距离',
    type: 'input'
  },
  {
    id: 'chartOptions.grid.containLabel',
    label: '包含坐标轴刻度标签',
    type: 'switch'
  },
  {
    id: 'chartOptions.grid.backgroundColor',
    label: '网格背景色',
    type: 'color'
  },
  {
    id: 'chartOptions.grid.borderColor',
    label: '网格边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.grid.borderWidth',
    label: '网格边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.grid.shadowBlur',
    label: '图形阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.grid.shadowColor',
    label: '图形阴影模糊颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.grid.shadowOffsetX',
    label: '图形阴影模糊X偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.grid.shadowOffsetY',
    label: '图形阴影模糊Y偏移',
    type: 'inputNumber'
  }
];

// X轴通用配置
const xAxis = [
  {
    id: 'chartOptions.xAxis.show',
    label: '显示X轴',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.type',
    label: '坐标轴类型',
    type: 'select',
    list: [
      {
        label: '数值轴',
        value: 'value'
      },
      {
        label: '类目轴',
        value: 'category'
      },
      {
        label: '时间轴',
        value: 'time'
      },
      {
        label: '对数轴',
        value: 'log'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.position',
    label: 'X轴位置',
    type: 'select',
    list: [
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.offset',
    label: 'X轴偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.name',
    label: '坐标轴名称',
    type: 'input'
  },
  {
    id: 'chartOptions.xAxis.nameLocation',
    label: '坐标轴名称位置',
    type: 'select',
    list: [
      {
        label: 'start',
        value: 'start'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'end',
        value: 'end'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameGap',
    label: '坐标轴名称与轴线距离',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameRotate',
    label: '坐标轴名字旋转',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.inverse',
    label: '反向坐标轴',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.splitNumber',
    label: '分割段数',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorSplitLine.show',
    label: '显示次分隔线',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.splitArea.show',
    label: '显示分隔区域',
    type: 'switch'
  },
  {
    label: '坐标轴名称的文字样式',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.color',
    label: '坐标轴名称颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.fontStyle',
    label: '坐标轴名称字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.fontWeight',
    label: '坐标轴名称字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.fontFamily',
    label: '坐标轴名称字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.fontSize',
    label: '坐标轴名称字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.align',
    label: '坐标轴名称水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.verticalAlign',
    label: '坐标轴名称垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textBorderColor',
    label: '坐标轴名称边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textBorderWidth',
    label: '坐标轴名称边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.borderRadius',
    label: '坐标轴名称圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.padding',
    label: '坐标轴名称内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textShadowColor',
    label: '坐标轴名称描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textShadowBlur',
    label: '坐标轴名称描边长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textShadowOffsetX',
    label: '坐标轴名称描边X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.textShadowOffsetY',
    label: '坐标轴名称描边Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.shadowColor',
    label: '坐标轴名称阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.shadowBlur',
    label: '坐标轴名称阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.shadowOffsetX',
    label: '坐标轴名称阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.nameTextStyle.shadowOffsetY',
    label: '坐标轴名称阴影Y',
    type: 'inputNumber'
  },
  {
    label: '坐标轴轴线相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.axisLine.show',
    label: '显示坐标轴轴线',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.color',
    label: '坐标轴线线颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLine.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴刻度相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.axisTick.show',
    label: '显示坐标轴刻度',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.axisTick.inside',
    label: '是否朝内',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.axisTick.length',
    label: '坐标轴刻度长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisTick.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴次刻度线相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.minorTick.show',
    label: '显示次刻度线',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.minorTick.splitNumber',
    label: '次刻度线分割数',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.length',
    label: '次刻度线长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.minorTick.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴刻度标签的相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.show',
    label: '显示刻度标签',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.inside',
    label: '是否朝内',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.inside',
    label: '刻度标签与轴线距离',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.fontStyle',
    label: '刻度标签字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLabel.fontWeight',
    label: '刻度标签字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLabel.fontFamily',
    label: '刻度标签字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLabel.fontSize',
    label: '刻度标签字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.align',
    label: '刻度标签水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLabel.verticalAlign',
    label: '刻度标签垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textBorderColor',
    label: '刻度标签边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textBorderWidth',
    label: '刻度标签边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.borderRadius',
    label: '刻度标签圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.padding',
    label: '刻度标签内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textShadowColor',
    label: '刻度标签描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textShadowBlur',
    label: '刻度标签描边长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textShadowOffsetX',
    label: '刻度标签描边X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.textShadowOffsetY',
    label: '刻度标签描边Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.shadowColor',
    label: '刻度标签阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.shadowBlur',
    label: '刻度标签阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.shadowOffsetX',
    label: '刻度标签阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.axisLabel.shadowOffsetY',
    label: '刻度标签阴影Y',
    type: 'inputNumber'
  },
  {
    label: '坐标轴在grid区域中的分隔线',
    type: 'title'
  },
  {
    id: 'chartOptions.xAxis.splitLine.show',
    label: '显示分隔线',
    type: 'switch'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.width',
    label: '分隔线线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.type',
    label: '分隔线线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.shadowBlur',
    label: '分隔线阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.shadowColor',
    label: '分隔线阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.shadowOffsetX',
    label: '分隔线阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.shadowOffsetY',
    label: '分隔线阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.xAxis.splitLine.lineStyle.opacity',
    label: '分隔线透明度',
    type: 'inputNumber'
  }
];

// y轴通用配置
const yAxis = [
  {
    id: 'chartOptions.yAxis.show',
    label: '显示Y轴',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.type',
    label: '坐标轴类型',
    type: 'select',
    list: [
      {
        label: '数值轴',
        value: 'value'
      },
      {
        label: '类目轴',
        value: 'category'
      },
      {
        label: '时间轴',
        value: 'time'
      },
      {
        label: '对数轴',
        value: 'log'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.position',
    label: 'Y轴位置',
    type: 'select',
    list: [
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.offset',
    label: 'Y轴偏移',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.name',
    label: '坐标轴名称',
    type: 'input'
  },
  {
    id: 'chartOptions.yAxis.nameLocation',
    label: '坐标轴名称位置',
    type: 'select',
    list: [
      {
        label: 'start',
        value: 'start'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'end',
        value: 'end'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameGap',
    label: '坐标轴名称与轴线距离',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameRotate',
    label: '坐标轴名字旋转',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.inverse',
    label: '反向坐标轴',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.splitNumber',
    label: '分割段数',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorSplitLine.show',
    label: '显示次分隔线',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.splitArea.show',
    label: '显示分隔区域',
    type: 'switch'
  },
  {
    label: '坐标轴名称的文字样式',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.color',
    label: '坐标轴名称颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.fontStyle',
    label: '坐标轴名称字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.fontWeight',
    label: '坐标轴名称字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.fontFamily',
    label: '坐标轴名称字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.fontSize',
    label: '坐标轴名称字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.align',
    label: '坐标轴名称水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.verticalAlign',
    label: '坐标轴名称垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textBorderColor',
    label: '坐标轴名称边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textBorderWidth',
    label: '坐标轴名称边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.borderRadius',
    label: '坐标轴名称圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.padding',
    label: '坐标轴名称内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textShadowColor',
    label: '坐标轴名称描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textShadowBlur',
    label: '坐标轴名称描边长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textShadowOffsetX',
    label: '坐标轴名称描边X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.textShadowOffsetY',
    label: '坐标轴名称描边Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.shadowColor',
    label: '坐标轴名称阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.shadowBlur',
    label: '坐标轴名称阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.shadowOffsetX',
    label: '坐标轴名称阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.nameTextStyle.shadowOffsetY',
    label: '坐标轴名称阴影Y',
    type: 'inputNumber'
  },
  {
    label: '坐标轴轴线相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.axisLine.show',
    label: '显示坐标轴轴线',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.color',
    label: '坐标轴线线颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLine.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴刻度相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.axisTick.show',
    label: '显示坐标轴刻度',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.axisTick.inside',
    label: '是否朝内',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.axisTick.length',
    label: '坐标轴刻度长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisTick.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴次刻度线相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.minorTick.show',
    label: '显示次刻度线',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.minorTick.splitNumber',
    label: '次刻度线分割数',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.length',
    label: '次刻度线长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.width',
    label: '坐标轴线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.type',
    label: '坐标轴线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.shadowBlur',
    label: '坐标轴阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.shadowColor',
    label: '坐标轴阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.shadowOffsetX',
    label: '坐标轴阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.shadowOffsetY',
    label: '坐标轴阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.minorTick.lineStyle.opacity',
    label: '坐标轴透明度',
    type: 'inputNumber'
  },
  {
    label: '坐标轴刻度标签的相关设置',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.show',
    label: '显示刻度标签',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.inside',
    label: '是否朝内',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.margin',
    label: '刻度标签与轴线距离',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.fontStyle',
    label: '刻度标签字体风格',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'italic',
        value: 'italic'
      },
      {
        label: 'oblique',
        value: 'oblique'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLabel.fontWeight',
    label: '刻度标签字体粗细',
    type: 'select',
    list: [
      {
        label: 'normal',
        value: 'normal'
      },
      {
        label: 'bold',
        value: 'bold'
      },
      {
        label: 'bolder',
        value: 'bolder'
      },
      {
        label: 'lighter',
        value: 'lighter'
      },
      {
        label: '100',
        value: '100'
      },
      {
        label: '200',
        value: '200'
      },
      {
        label: '300',
        value: '300'
      },
      {
        label: '400',
        value: '400'
      },
      {
        label: '500',
        value: '500'
      },
      {
        label: '600',
        value: '600'
      },
      {
        label: '700',
        value: '700'
      },
      {
        label: '800',
        value: '800'
      },
      {
        label: '900',
        value: '900'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLabel.fontFamily',
    label: '刻度标签字体系列',
    type: 'select',
    list: [
      {
        label: 'sans-serif',
        value: 'sans-serif'
      },
      {
        label: 'monospace',
        value: 'monospace'
      },
      {
        label: 'Arial',
        value: 'Arial'
      },
      {
        label: 'Courier New',
        value: 'Courier New'
      },
      {
        label: 'Microsoft YaHei',
        value: 'Microsoft YaHei'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLabel.fontSize',
    label: '刻度标签字体大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.align',
    label: '刻度标签水平对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLabel.verticalAlign',
    label: '刻度标签垂直对齐',
    type: 'select',
    list: [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'middle',
        value: 'middle'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textBorderColor',
    label: '刻度标签边框颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textBorderWidth',
    label: '刻度标签边框宽度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.borderRadius',
    label: '刻度标签圆角',
    type: 'padding'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.padding',
    label: '刻度标签内边距',
    type: 'padding'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textShadowColor',
    label: '刻度标签描边颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textShadowBlur',
    label: '刻度标签描边长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textShadowOffsetX',
    label: '刻度标签描边X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.textShadowOffsetY',
    label: '刻度标签描边Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.shadowColor',
    label: '刻度标签阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.shadowBlur',
    label: '刻度标签阴影长度',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.shadowOffsetX',
    label: '刻度标签阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.axisLabel.shadowOffsetY',
    label: '刻度标签阴影Y',
    type: 'inputNumber'
  },
  {
    label: '坐标轴在grid区域中的分隔线',
    type: 'title'
  },
  {
    id: 'chartOptions.yAxis.splitLine.show',
    label: '显示分隔线',
    type: 'switch'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.width',
    label: '分隔线线线宽',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.type',
    label: '分隔线线类型',
    type: 'select',
    list: [
      {
        label: 'solid',
        value: 'solid'
      },
      {
        label: 'dashed',
        value: 'dashed'
      },
      {
        label: 'dotted',
        value: 'dotted'
      }
    ]
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.shadowBlur',
    label: '分隔线阴影模糊大小',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.shadowColor',
    label: '分隔线阴影颜色',
    type: 'color'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.shadowOffsetX',
    label: '分隔线阴影X',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.shadowOffsetY',
    label: '分隔线阴影Y',
    type: 'inputNumber'
  },
  {
    id: 'chartOptions.yAxis.splitLine.lineStyle.opacity',
    label: '分隔线透明度',
    type: 'inputNumber'
  }
];

// 折线图配置
export const xaEchartsLineConfig = [
  {
    label: '标题',
    id: 'title',
    children: [...titleConfig]
  },
  {
    label: '图例',
    id: 'legend',
    children: [...legendConfig]
  },
  {
    label: '网格',
    id: 'grid',
    children: [...grid]
  },
  {
    label: 'X轴',
    id: 'xAxis',
    children: [...xAxis]
  },
  {
    label: 'Y轴',
    id: 'yAxis',
    children: [...yAxis]
  }
];

// 柱状图配置
export const xaEchartsBarConfig = [
    {
      label: '标题',
      id: 'title',
      children: [...titleConfig]
    },
    {
      label: '图例',
      id: 'legend',
      children: [...legendConfig]
    },
    {
      label: '网格',
      id: 'grid',
      children: [...grid]
    },
    {
      label: 'X轴',
      id: 'xAxis',
      children: [...xAxis]
    },
    {
      label: 'Y轴',
      id: 'yAxis',
      children: [...yAxis]
    }
  ];

export default {
  xaEchartsLineConfig,
  xaEchartsBarConfig
};
