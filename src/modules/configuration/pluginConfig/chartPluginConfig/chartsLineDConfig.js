import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsLineDConfig = {
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
};

export default chartsLineDConfig;
