import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsScatterDConfig = {
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
};

export default chartsScatterDConfig;
