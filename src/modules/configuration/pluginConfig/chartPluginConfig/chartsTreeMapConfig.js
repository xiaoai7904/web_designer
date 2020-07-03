import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';
import { chartTitle, chartLegend, chartGrid, chartxAxis, chartyAxis, chartTooltip } from '@/modules/configuration/commonConfig/chartConfig';

export const chartsTreeMapConfig = {
  key: 'xaEchartsTreeMap',
  type: 'chart',
  props: {
    chartConfig: {
      title: { ...chartTitle },
      legend: { ...chartLegend },
      tooltip: { ...chartTooltip },
      series: [
        {
          name: 'Disk Usage',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}',
          },
          itemStyle: {
            borderColor: '#fff',
          },
          levels: [
            {
              itemStyle: {
                borderWidth: 0,
                gapWidth: 5,
              },
            },
            {
              itemStyle: {
                gapWidth: 1,
              },
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
                gapWidth: 1,
                borderColorSaturation: 0.6,
              },
            },
          ],
          data: [
            { value: 40, name: 'Accessibility', path: 'Accessibility' },
            {
              value: 180,
              name: 'Accounts',
              path: 'Accounts',
              children: [
                {
                  value: 76,
                  name: 'Access',
                  path: 'Accounts/Access',
                  children: [
                    { value: 12, name: 'DefaultAccessPlugin.bundle', path: 'Accounts/Access/DefaultAccessPlugin.bundle' },
                    { value: 28, name: 'FacebookAccessPlugin.bundle', path: 'Accounts/Access/FacebookAccessPlugin.bundle' },
                    { value: 20, name: 'LinkedInAccessPlugin.bundle', path: 'Accounts/Access/LinkedInAccessPlugin.bundle' },
                    { value: 16, name: 'TencentWeiboAccessPlugin.bundle', path: 'Accounts/Access/TencentWeiboAccessPlugin.bundle' },
                  ],
                },
                {
                  value: 92,
                  name: 'Authentication',
                  path: 'Accounts/Authentication',
                  children: [
                    { value: 24, name: 'FacebookAuthenticationPlugin.bundle', path: 'Accounts/Authentication/FacebookAuthenticationPlugin.bundle' },
                    { value: 16, name: 'LinkedInAuthenticationPlugin.bundle', path: 'Accounts/Authentication/LinkedInAuthenticationPlugin.bundle' },
                    { value: 20, name: 'TencentWeiboAuthenticationPlugin.bundle', path: 'Accounts/Authentication/TencentWeiboAuthenticationPlugin.bundle' },
                    { value: 16, name: 'TwitterAuthenticationPlugin.bundle', path: 'Accounts/Authentication/TwitterAuthenticationPlugin.bundle' },
                    { value: 16, name: 'WeiboAuthenticationPlugin.bundle', path: 'Accounts/Authentication/WeiboAuthenticationPlugin.bundle' },
                  ],
                },
                { value: 12, name: 'Notification', path: 'Accounts/Notification', children: [{ value: 12, name: 'SPAAccountsNotificationPlugin.bundle', path: 'Accounts/Notification/SPAAccountsNotificationPlugin.bundle' }] },
              ],
            },
          ],
        },
      ],
    },
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '矩形树图', height: 500, width: 500, iconname: 'iconjuxingshutu' }),
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

export default chartsTreeMapConfig;
