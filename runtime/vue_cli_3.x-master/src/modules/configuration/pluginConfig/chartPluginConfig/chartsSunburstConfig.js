import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsSunburstConfig = {
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
};

export default chartsSunburstConfig;
