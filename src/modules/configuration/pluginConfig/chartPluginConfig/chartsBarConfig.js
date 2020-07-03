import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsBarConfig = {
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
};

export default chartsBarConfig;
