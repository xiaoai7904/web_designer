import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsBarDConfing = {
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
};

export default chartsBarDConfing;
