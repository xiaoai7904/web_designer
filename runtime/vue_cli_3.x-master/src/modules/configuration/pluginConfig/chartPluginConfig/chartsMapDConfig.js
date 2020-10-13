import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsMapDConfig = {
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
};

export default chartsMapDConfig;
