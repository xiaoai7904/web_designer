import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const chartsMapConfig = {
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
};

export default chartsMapConfig;
