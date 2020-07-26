<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaTable',

  mixins: [pluginsMixins],

  methods: {
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    selectEvent(selection, row) {
      this.eventFunctionHandler('select', selection, row)
    },
    // 当用户手动勾选全选 Checkbox 时触发的事件
    selectAllEvent(selection) {
      this.eventFunctionHandler('selectAll', selection)
    },
    // 当选择项发生变化时会触发该事件
    selectionChangeEvent(selection) {
      this.eventFunctionHandler('selectionChange', selection)
    },
    // 当单元格 hover 进入时会触发该事件
    cellMouseEnterEvent(row, column, cell, event) {
      this.eventFunctionHandler('cellMouseEnter', row, column, cell, event)
    },
    // 当单元格 hover 退出时会触发该事件
    cellMouseLeaveEvent(row, column, cell, event) {
      this.eventFunctionHandler('cellMouseLeave', row, column, cell, event)
    },
    // 当某个单元格被点击时会触发该事件
    cellClickEvent(row, column, cell, event) {
      this.eventFunctionHandler('cellClick', row, column, cell, event)
    },
    // 当某个单元格被双击击时会触发该事件
    cellDblclickEvent(row, column, cell, event) {
      this.eventFunctionHandler('cellDblclick', row, column, cell, event)
    },
    // 当某一行被点击时会触发该事件
    rowClickEvent(row, column, event) {
      this.eventFunctionHandler('rowClick', row, column, event)
    },
    // 当某一行被鼠标右键点击时会触发该事件
    rowContextmenuEvent(row, column, event) {
      this.eventFunctionHandler('rowContextmenu', row, column, event)
    },
    // 当某一行被双击时会触发该事件
    rowDblclickEvent(row, column, event) {
      this.eventFunctionHandler('rowDblclick', row, column, event)
    },
    // 当某一列的表头被点击时会触发该事件
    headerClickEvent(column, event) {
      this.eventFunctionHandler('headerClick', column, event)
    },
    // 当某一列的表头被鼠标右键点击时触发该事件
    headerContextmenuEvent(column, event) {
      this.eventFunctionHandler('headerContextmenu', column, event)
    },
    // 当表格的排序条件发生变化的时候会触发该事件
    sortChangeEvent({ column, prop, order }) {
      this.eventFunctionHandler('sortChange', column, prop, order)
    },
    // 当表格的筛选条件发生变化的时候会触发该事件
    filterChangeEvent(filters) {
      this.eventFunctionHandler('filterChange', filters)
    },
    // 当表格的当前行发生变化的时候会触发该事件
    currentChangeEvent(currentRow, oldCurrentRow) {
      this.eventFunctionHandler('currentChange', currentRow, oldCurrentRow)
    },
    // 当拖动表头改变了列的宽度的时候会触发该事件
    headerDragendEvent(newWidth, oldWidth, column, event) {
      this.eventFunctionHandler('headerDragend', newWidth, oldWidth, column, event)
    },
    // 当用户对某一行展开或者关闭的时候会触发该事件
    expandChangeEvent(row, expandedRows) {
      this.eventFunctionHandler('expandChange', row, expandedRows)
    }
  },

  render(h) {
    return <div class="xa-table" style={this.styles}>
      <el-table
        data={this.options.data}
        stripe={this.options.stripe}
        border={this.options.border}
        size={this.options.size}
        fit={this.options.fit}
        show-header={this.options.showHeader}
        empty-text={this.options.emptyText}
        show-summary={this.options.showSummary}
        sum-text={this.options.sumText}
        summary-method={this.options.summaryMethod}
        span-method={this.options.spanMethod}
        onSelect={this.selectEvent}
        onSelectAll={this.selectAllEvent}
        onSelectionChange={this.selectionChangeEvent}
        onCellMouseEnter={this.cellMouseEnterEvent}
        onCellMouseLeave={this.cellMouseLeaveEvent}
        onCellClick={this.cellClickEvent}
        oncellDblclick={this.cellDblclickEvent}
        onRowClick={this.rowClickEvent}
        onRowContextmenu={this.rowContextmenuEvent}
        onRowDblclick={this.rowDblclickEvent}
        onHeaderClick={this.headerClickEvent}
        onHeaderContextmenu={this.headerContextmenuEvent}
        onSortChange={this.sortChangeEvent}
        onFilterChange={this.filterChangeEvent}
        onCurrentChange={this.currentChangeEvent}
        onHeaderDragend={this.headerDragendEvent}
        onExpandChange={this.expandChangeEvent}
      >
        {this.options.children.map((item, index) => {
          return <el-table-column key={index} prop={item.prop} label={item.label} width={item.width}></el-table-column>
        })}
      </el-table>
    </div>
  }
}
</script>

<style lang="scss">
</style>
