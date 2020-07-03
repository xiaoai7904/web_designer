import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const sliderConfig = {
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
};

export default sliderConfig;
