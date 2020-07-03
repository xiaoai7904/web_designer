import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsBarStackConfig = {
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
};

export default chartsBarStackConfig;
