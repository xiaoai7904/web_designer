export const createItem = (h, item, vm) => {
  let renderDom = null;

  switch (item.type) {
    case 'input':
      renderDom = (
        <el-input
          value={vm.handlerData(item.id, 'get')}
          size="small"
          placeholder="请输入"
          on-input={value => {
            vm.handlerData({ id: item.id, value }, 'set');
          }}
        >
          {item.unit && <template slot="append">{item.unit}</template>}
        </el-input>
      );
      break;
    case 'inputNumber':
      renderDom = (
        <el-input-number
          value={vm.handlerData(item.id, 'get')}
          size="small"
          min={0}
          placeholder="请输入"
          on-input={value => {
            vm.handlerData({ id: item.id, value }, 'set');
          }}
        />
      );
      break;
    case 'select':
      renderDom = (
        <el-select
          value={vm.handlerData(item.id, 'get')}
          size="small"
          on-input={value => {
            vm.handlerData({ id: item.id, value }, 'set');
          }}
        >
          {item.list.map((opt, index) => {
            return <el-option key={index} label={opt.label} value={opt.value} />;
          })}
        </el-select>
      );
      break;
    case 'switch':
      renderDom = (
        <xa-switch
          value={vm.handlerData(item.id, 'get')}
          on-change={value => {
            vm.handlerData({ id: item.id, value }, 'set');
          }}
          disabled={item.disabled}
          active-value={item.activeValue || true}
          inactive-value={item.inactiveValue || false}
          active-text={item.activeText || '是'}
          inactive-text={item.inactiveText || '否'}
        />
      );
      break;
    case 'color':
      renderDom = (
        <el-color-picker
          value={vm.handlerData(item.id, 'get')}
          on-change={value => {
            vm.handlerData({ id: item.id, value }, 'set');
          }}
          show-alpha
        />
      );
      break;
    case 'title':
      renderDom = <span class="attributs-setting__title">{item.label} :</span>;
      break;
    case 'tips':
      renderDom = <span class="attributs-setting__tips">{item.label}</span>;
      break;
  }
  return renderDom;
};
