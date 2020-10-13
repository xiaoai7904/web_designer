import commonConfig from '@/modules/configuration/commonConfig/basisCommonConfig';

export const calendarConfig = {
  key: 'xaCalendar',
  props: {
    value: new Date(),
  },
  style: Object.assign({}, commonConfig.style),
  custom: Object.assign({}, commonConfig.custom, { name: '日历', height: 200, width: 450, iconname: 'iconrili' }),
  options: [].concat(commonConfig.options),
};

export default calendarConfig;
