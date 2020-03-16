import Vue from 'vue';

import xaInput from './input/input.vue';
import xaSwitch from './switch/switch.vue';
import xaRadio from './radio/radio.vue';
import xaInputNumber from './inputNumber/inputNumber.vue';
import xaCheckBox from './checkBox/checkBox.vue';
import xaSelect from './select/select.vue';
import xaSlider from './slider/slider.vue';
import xaProgress from './progress/progress.vue';
import xaTag from './tag/tag.vue';
import xaAlert from './alert/alert.vue';
import xaCollapse from './collapse/collapse.vue';
import xaCalendar from './calendar/calendar.vue';
import xaBreadcrumb from './breadcrumb/breadcrumb.vue';
import xaColorPicker from './colorPicker/colorPicker.vue';
import xaRate from './rate/rate.vue';
import xaTimePicker from './timePicker/timePicker.vue';
import xaDatePicker from './datePicker/datePicker.vue';
import xaButton from './button/button.vue';
import xaLink from './link/link.vue';
import xaTable from './table/table.vue';
import xaTree from './tree/tree.vue';
import xaMenu from './menu/menu.vue';
import xaContainerLayout from './containerLayout/containerLayout.vue';
import xaEchartsLine from './echartsLine/echartsLine.vue';
import xaEchartsBar from './echartsBar/echartsBar.vue';
import xaEchartsBarStack from './echartsBarStack/echartsBarStack.vue';
import xaEchartsPie from './echartsPie/echartsPie.vue';
import xaEchartsScatter from './echartsScatter/echartsScatter.vue'
import xaEchartsMap from './echartsMap/echartsMap.vue'
import xaEchartsRadar from './echartsRadar/echartsRadar.vue'
import xaEchartsBoxplot from './echartsBoxplot/echartsBoxplot.vue'
import xaEchartsTree from './echartsTree/echartsTree.vue'
import xaEchartsTreeMap from './echartsTreeMap/echartsTreeMap.vue'
import xaEchartsSunburst from './echartsSunburst/echartsSunburst.vue'
import xaEchartsFunnel from './echartsFunnel/echartsFunnel.vue'
import xaEchartsGauge from './echartsGauge/echartsGauge.vue'
import xaEchartsBarD from './echartsBarD/echartsBarD.vue'
import xaEchartsMapD from './echartsMapD/echartsMapD.vue'
import xaEchartsScatterD from './echartsScatterD/echartsScatterD.vue'
import xaEchartsSurfaceD from './echartsSurfaceD/echartsSurfaceD.vue'
import xaEchartsLineD from './echartsLineD/echartsLineD.vue'

const plugins = {
  xaInput,
  xaSwitch,
  xaRadio,
  xaInputNumber,
  xaCheckBox,
  xaSelect,
  xaSlider,
  xaProgress,
  xaTag,
  xaAlert,
  xaCollapse,
  xaCalendar,
  xaBreadcrumb,
  xaColorPicker,
  xaRate,
  xaTimePicker,
  xaDatePicker,
  xaButton,
  xaLink,
  xaTable,
  xaTree,
  xaMenu,
  xaContainerLayout,
  xaEchartsLine,
  xaEchartsBar,
  xaEchartsBarStack,
  xaEchartsPie,
  xaEchartsScatter,
  xaEchartsMap,
  xaEchartsRadar,
  xaEchartsBoxplot,
  xaEchartsTree,
  xaEchartsTreeMap,
  xaEchartsSunburst,
  xaEchartsFunnel,
  xaEchartsGauge,
  xaEchartsBarD,
  xaEchartsMapD,
  xaEchartsScatterD,
  xaEchartsSurfaceD,
  xaEchartsLineD
};

const installComponents = function() {
  Object.keys(plugins).map(item => {
    Vue.component(item, plugins[item]);
  });
};

export default installComponents;
