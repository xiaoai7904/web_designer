<template>
  <div class="event-setting">
    <div class="event-setting-title">添加事件: (点击选择事件类型)</div>
    <div class="event-setting-select">
      <el-dropdown v-if="componentsEvents.length > 0" trigger="click">
        <el-button size="mini">组件事件</el-button>
        <el-dropdown-menu slot="dropdown" class="event-setting-dropdown">
          <el-dropdown-item
            v-for="item in componentsEvents"
            :key="item.eventName"
            :disabled="eventData.filter(eventDataItem => eventDataItem.eventName === item.eventName).length > 0"
            @click.native="selectEvent(item)"
          >
            <div class="event-setting-dropdown-item">
              <span>{{item.eventName}}</span>
              <span class="event-setting-des">{{item.eventDes}}</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="event-setting-list">
      <el-table :data="eventData" border size="mini" @cell-click="tableCellClick">
        <el-table-column prop="eventName" label="已有事件">
          <template slot-scope="scope">
            <div class="event-setting-dropdown-item">
              <span>{{scope.row.eventName}}</span>
              <span class="event-setting-des">{{componentsEventsObj[scope.row.eventName].eventDes}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="50px">
          <template slot-scope="scope">
            <el-popconfirm title="您确定删除该事件吗？" @onConfirm="handleDel(scope.row)">
              <el-button slot="reference" type="text" size="small">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-drawer
      title="事件回调函数在线编辑"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose"
      :append-to-body="true"
      :wrapperClosable="false"
      size="600px"
      custom-class="event-setting-code-edit"
      @close="closeDrawer"
    >
      <CodeEditor
        v-if="drawer"
        ref="codeEditorRef"
        :codeContent="currentEvent.eventCallBack.toString()"
        language="javascript"
        type="[object Function]"
      />
    </el-drawer>
  </div>
</template>

<script>
import { types, firstUpperCase } from '@/modules/utils/utils';
export default {
  name: 'eventSetting',

  props: {
    options: Object
  },

  watch: {
    'options.custom.eventConfig': {
      handler() {
        this.init()
        if (this.options && this.options.custom && this.options.custom.eventConfig) {
          this.createEvent()
        }
      },
      immediate: true
    },
    'options.custom.eventListener': {
      handler() {
        if (this.options && this.options.custom && this.options.custom.eventListener) {
          this.createEventData()
        }
      },
      immediate: true
    }
  },

  data() {
    return {
      drawer: false,
      componentsEvents: [],
      eventData: [],
      currentEvent: {},
      componentsEventsObj: {}
    }
  },

  mounted() {
  },

  methods: {
    init() {
      this.componentsEvents = []
      this.eventData = []
      this.currentEvent = {}
    },
    createEvent() {
      let _componentsEvents = []
      let _componentsEventsObj = {}

      this.options.custom.eventConfig.forEach(item => {
        // 1: 组件事件 2: 原生事件 
        if (item.eventType === '1') {
          _componentsEvents.push(item)
          _componentsEventsObj[item.eventName] = Object.assign({}, item)
        }
      })

      this.componentsEvents = _componentsEvents.slice(0)
      this.componentsEventsObj = Object.assign({}, _componentsEventsObj)
    },
    createEventData() {
      this.eventData = Object.keys(this.options.custom.eventListener).map(item => ({ eventName: item, eventCallBack: this.options.custom.eventListener[item] }))
    },
    handleDel(row) {
      let eventListener = Object.assign({}, this.options.custom.eventListener)
      // 删除组件配置上对应事件
      eventListener.hasOwnProperty(row.eventName) && delete eventListener[row.eventName]
      this.$store.commit('updatePluginsProps', { id: this.options.id, modify: { id: 'custom.eventListener', value: eventListener } })
    },
    selectEvent(item) {
      if (!this.drawer) this.drawer = true
      this.currentEvent = Object.assign({}, item, { eventCallBack: new Function(`return function on${firstUpperCase(item.eventName)}EventCallBack() {}`)() })
    },
    handleClose() {
      this.$confirm('是否保存并关闭?')
        .then(_ => {
          const codeValue = this.$refs.codeEditorRef.getValue()
          if (types(codeValue) === '[object Error]') {
            this.$notify.error({
              title: '错误',
              message: '代码存在语法错误!'
            });
          } else {
            // 保存事件回调
            this.$store.commit('updatePluginsProps', { id: this.options.id, modify: { id: 'custom.eventListener', value: Object.assign({}, this.options.custom.eventListener, { [this.currentEvent.eventName]: codeValue }) } })
            this.drawer = false
          }
          done();
        })
        .catch(_ => { this.drawer = false });
    },
    tableCellClick(row, column, event) {
      if (column.property === 'eventName') {
        if (!this.drawer) this.drawer = true
        this.currentEvent = Object.assign({}, row)
      }
    },
    closeDrawer() {
      this.currentEvent = {}
    }
  }
}
</script>

<style lang="scss">
.event-setting {
  &-title {
    font-size: 13px;
  }
  &-select {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .el-dropdown {
      flex: 1;
      .el-button--mini {
        width: 100%;
        border-radius: 0;
      }
    }
    .el-dropdown:nth-of-type(2) {
      .el-button--mini {
        border-left: 0px;
      }
    }
  }
  &-dropdown {
    min-width: 276px;
    &-item {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }
  }
  &-des {
    color: #909090;
    font-size: 12px;
  }
  &-list {
    margin-top: 20px;
  }
  &-code-edit {
    .el-drawer__header {
      margin-bottom: 0;
      padding: 10px;
    }
  }
}
</style>