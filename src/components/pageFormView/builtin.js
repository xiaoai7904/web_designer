export const createItem = (h, item, vm) => {
  let renderDom = null;
  switch (item.type) {
    case 'input':
      renderDom = (
        <el-input
          value={vm.handlerData(item.id, 'get')}
          size="small"
          placeholder="请输入"
          disabled={item.options && item.options.disabled !== undefined ? item.options.disabled : false}
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
          disabled={item.options && item.options.disabled !== undefined ? item.options.disabled : false}
          min={item.options && item.options.min !== void 0 ? item.options.min : 0}
          max={item.options && item.options.max !== void 0 ? item.options.max : Infinity}
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
    case 'icon':
      let _currentCheckIcon = '';
      renderDom = (
        <div
          class="attributs-setting__icons"
          on-click={e => {
            vm.$refs.iconsDialogView.showDialog(item.id);
            vm.$nextTick(() => {
              vm.currentIcons = vm.handlerData(item.id, 'get');
            });
          }}
        >
          <i class={vm.handlerData(item.id, 'get')} style="font-size:35px;" />
          <pageDialogView
            ref="iconsDialogView"
            options={{ width: '1100px', title: '选择Icon图标', id: item.id }}
            on-confirmDialog={id => {
              _currentCheckIcon && vm.handlerData({ id, value: _currentCheckIcon }, 'set');
            }}
          >
            <pageIconsView
              checkIcons={vm.currentIcons}
              on-check={value => {
                _currentCheckIcon = value;
              }}
            />
          </pageDialogView>
        </div>
      );
      break;
    case 'title':
      renderDom = <span class="attributs-setting__title">{item.label} :</span>;
      break;
    case 'tips':
      renderDom = <span class="attributs-setting__tips">{item.label}</span>;
      break;
    case 'custom':
      renderDom = item.render(h, vm);
      break;
  }
  return renderDom;
};
