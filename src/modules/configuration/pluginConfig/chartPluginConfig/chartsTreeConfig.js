import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsTreeConfig = {
  key: 'xaEchartsTree',
  type: 'chart',
  props: {
    chartConfig: {
      title: { ...chartTitle },
      legend: { ...chartLegend },
      tooltip: { ...chartTooltip },
      series: [
        {
          type: 'tree',

          data: [
            {
              name: 'flare',
              children: [
                {
                  name: 'analytics',
                  children: [
                    {
                      name: 'cluster',
                      children: [
                        { name: 'AgglomerativeCluster', value: 3938 },
                        { name: 'CommunityStructure', value: 3812 },
                        { name: 'HierarchicalCluster', value: 6714 },
                        { name: 'MergeEdge', value: 743 },
                      ],
                    },
                    {
                      name: 'graph',
                      children: [
                        { name: 'BetweennessCentrality', value: 3534 },
                        { name: 'LinkDistance', value: 5731 },
                        { name: 'MaxFlowMinCut', value: 7840 },
                        { name: 'ShortestPaths', value: 5914 },
                        { name: 'SpanningTree', value: 3416 },
                      ],
                    },
                    { name: 'optimization', children: [{ name: 'AspectRatioBanker', value: 7074 }] },
                  ],
                },
                {
                  name: 'animate',
                  children: [
                    { name: 'Easing', value: 17010 },
                    { name: 'FunctionSequence', value: 5842 },
                    {
                      name: 'interpolate',
                      children: [
                        { name: 'ArrayInterpolator', value: 1983 },
                        { name: 'ColorInterpolator', value: 2047 },
                        { name: 'DateInterpolator', value: 1375 },
                        { name: 'Interpolator', value: 8746 },
                      ],
                    },
                    { name: 'ISchedulable', value: 1041 },
                    { name: 'Parallel', value: 5176 },
                    { name: 'Pause', value: 449 },
                  ],
                },
                {
                  name: 'data',
                  children: [
                    {
                      name: 'converters',
                      children: [
                        { name: 'Converters', value: 721 },
                        { name: 'DelimitedTextConverter', value: 4294 },
                      ],
                    },
                    { name: 'DataField', value: 1759 },
                    { name: 'DataSchema', value: 2165 },
                  ],
                },
                {
                  name: 'display',
                  children: [
                    { name: 'DirtySprite', value: 8833 },
                    { name: 'LineSprite', value: 1732 },
                  ],
                },
                { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },

                {
                  name: 'vis',
                  children: [
                    {
                      name: 'axis',
                      children: [
                        { name: 'Axes', value: 1302 },
                        { name: 'Axis', value: 24593 },
                        { name: 'AxisGridLine', value: 652 },
                        { name: 'AxisLabel', value: 636 },
                        { name: 'CartesianAxes', value: 6703 },
                      ],
                    },
                    {
                      name: 'controls',
                      children: [
                        { name: 'AnchorControl', value: 2138 },
                        { name: 'ClickControl', value: 3824 },
                        { name: 'Control', value: 1353 },
                        { name: 'ControlList', value: 4665 },
                      ],
                    },
                    {
                      name: 'data',
                      children: [
                        { name: 'Data', value: 20544 },
                        { name: 'DataList', value: 19788 },
                        { name: 'DataSprite', value: 10349 },
                        { name: 'EdgeSprite', value: 3301 },
                        { name: 'NodeSprite', value: 19382 },
                        {
                          name: 'render',
                          children: [
                            { name: 'ArrowType', value: 698 },
                            { name: 'EdgeRenderer', value: 5569 },
                            { name: 'IRenderer', value: 353 },
                            { name: 'ShapeRenderer', value: 2247 },
                          ],
                        },
                        { name: 'ScaleBinding', value: 11275 },
                        { name: 'Tree', value: 7147 },
                        { name: 'TreeBuilder', value: 9930 },
                      ],
                    },
                    {
                      name: 'events',
                      children: [
                        { name: 'DataEvent', value: 2313 },
                        { name: 'SelectionEvent', value: 1880 },
                        { name: 'TooltipEvent', value: 1701 },
                        { name: 'VisualizationEvent', value: 1117 },
                      ],
                    },
                    {
                      name: 'legend',
                      children: [
                        { name: 'Legend', value: 20859 },
                        { name: 'LegendItem', value: 4614 },
                        { name: 'LegendRange', value: 10530 },
                      ],
                    },
                    { name: 'Visualization', value: 16540 },
                  ],
                },
              ],
            },
          ],

          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',

          symbolSize: 7,

          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },

          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    },
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '树图', height: 300, width: 400, iconname: 'iconshutu' }),
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

export default chartsTreeConfig;
