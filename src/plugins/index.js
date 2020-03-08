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
import xaHorizontalLayout from './horizontalLayout/horizontalLayout.vue';
import xaContainerLayout from './containerLayout/containerLayout.vue';

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
  xaHorizontalLayout,
  xaContainerLayout
};

const installComponents = function() {
  Object.keys(plugins).map(item => {
    Vue.component(item, plugins[item]);
  });
};

export default installComponents;
