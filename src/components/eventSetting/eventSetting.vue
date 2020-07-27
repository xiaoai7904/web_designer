<template>
  <div class="event-setting">
    <!--组件事件配置-->
    <div class="event-setting-title">添加组件事件处理函数:</div>
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
    <!--联动事件配置-->
    <div class="event-setting-title">添加组件联动事件:</div>
    <div class="event-setting-select">
      <el-button size="mini" @click="openLinkageEventSetting">组件联动事件</el-button>
    </div>
    <div class="event-setting-list">
      <el-table :data="linkageEventData" border size="mini" @cell-click="tableCellClick">
        <el-table-column prop="eventName">
          <template slot="header" slot-scope="scope">
            <div>已有事件</div>
            <span class="event-setting-list-table-des">组件事件$$联动组件ID$$联动类型</span>
          </template>
          <template slot-scope="scope">
            <div class="event-setting-dropdown-item">{{scope.row.eventName}}</div>
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
    <pageDialogView
      :options="pageDialogOptions"
      ref="pageDialogViewRef"
      @cancelDialog="cancelDialogFn"
      @confirmDialog="confirmDialogFn"
    >
      <el-steps
        :active="linkageEventSettingActiveIndex"
        finish-status="success"
        :align-center="true"
      >
        <el-step title="选择组件事件"></el-step>
        <el-step title="选择联动组件"></el-step>
        <el-step title="设置联动类型"></el-step>
      </el-steps>
      <div
        class="linkage-dialog-title"
      >{{currentLinkageEvent.length ? '联动事件关系链: ' + linkageEventLevel : '联动事件关系链: 请选择组件事件'}}</div>
      <div class="linkage-dialog-content">
        <div v-show="linkageEventSettingActiveIndex === 0">
          <ul class="linkage-dialog-event">
            <li
              v-for="item in componentsEvents"
              @click="selectComponentEvent(item)"
              :class="item.eventName === currentLinkageEvent[0] ? 'linkage-dialog-event-actived' : ''"
            >
              <span>{{item.eventName}}</span>
              <span>{{item.eventDes}}</span>
            </li>
          </ul>
        </div>
        <div v-show="linkageEventSettingActiveIndex === 1">
          <ul class="linkage-dialog-event">
            <li
              v-for="item in pagePulgin"
              @click="selectLinkageComponent(item)"
              :class="currentLinkageEvent.length > 1 && item.id === currentLinkageEvent[1] ? 'linkage-dialog-event-actived' : ''"
            >
              <span>{{item.custom.name}}</span>
              <span>{{item.custom.id}}</span>
            </li>
          </ul>
        </div>
        <div v-if="linkageEventSettingActiveIndex === 2">
          <ul class="linkage-dialog-event">
            <li
              v-for="item in linkageEventConfig"
              :class="item.checked ? 'linkage-dialog-event-checked' : ''"
              @click="selectLinkageComponentEventType(item)"
            >
              <span>{{item.id}}</span>
              <span>{{item.label}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="linkage-dialog-tool">
        <el-button size="mini" v-show="linkageEventSettingActiveIndex > 0" @click="previous">上一步</el-button>
      </div>
    </pageDialogView>

    <el-drawer
      title="事件回调函数在线编辑"
      :visible.sync="drawer"
      direction="rtl"
      :before-close="handleClose"
      :append-to-body="true"
      :wrapperClosable="false"
      size="800px"
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
import { types, firstUpperCase, classnames } from '@/modules/utils/utils';
import EventSetting from '@/modules/eventSetting/eventSetting.module';

let eventSettingIns = null
let linkageComponentEventTypeDisabled = false

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
          this.createEventConfig()
        }
      },
      immediate: true
    },
    'options.custom.eventListener': {
      handler() {
        if (this.options && this.options.custom && this.options.custom.eventListener) {
          eventSettingIns.updateEventListener(this.options.custom.eventListener)
          this.createEventListener()
        }
      },
      immediate: true
    }
  },

  computed: {
    pagePulgin() {
      // 过滤联动组件,联动事件无法联动自己
      return this.$store.state.plugins.filter(item => item.id !== this.options.id)
    },
    linkageEventLevel() {
      let _currentLinkageEvent = [...this.currentLinkageEvent]
      _currentLinkageEvent.length > 2 && _currentLinkageEvent.pop()
      return _currentLinkageEvent.join(' & ')
    }
  },

  data() {
    return {
      drawer: false,
      componentsEvents: [],
      eventData: [],
      currentEvent: {},
      currentLinkageEvent: [],
      componentsEventsObj: {},
      linkageEventData: [],
      pageDialogOptions: {
        title: '组件联动事件配置',
        classname: 'event-setting-dialog',
      },
      linkageEventSettingActiveIndex: 0,
      linkageEventConfig: [],
      openLinkageEventDialog: false,
    }
  },

  beforeCreate() {
    eventSettingIns = new EventSetting()
  },

  mounted() {
  },

  methods: {
    init() {
      this.componentsEvents = []
      this.eventData = []
      this.currentEvent = {}
    },
    createEventConfig() {
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
    createEventListener() {
      const { eventData, linkageEventData } = eventSettingIns.createEventListener()

      this.eventData = eventData.slice(0)
      this.linkageEventData = linkageEventData.slice(0)
    },
    handleDel(row) {
      this.$store.commit('updatePluginsProps', { id: this.options.id, modify: { id: 'custom.eventListener', value: eventSettingIns.delEventListener(row.eventName).eventListener } })
    },
    selectEvent(item) {
      if (!this.drawer) this.drawer = true
      this.currentEvent = eventSettingIns.createEventFunction(item)
    },
    handleClose() {
      const codeValue = this.$refs.codeEditorRef.getValue()
      const saveCode = () => {
        this.$confirm('是否保存并关闭?')
          .then(_ => {
            if (types(codeValue) === '[object Error]') {
              this.$notify.error({
                title: '错误',
                message: '代码存在语法错误!'
              });
            } else {
              this.openLinkageEventDialog ? this.saveLinkageCompoentEventCode(codeValue) : this.saveComponentEventCode(codeValue)
              this.drawer = false
              done();
            }
          })
          .catch(_ => { this.drawer = false });
      }
      // 如果当前事件函数存在值并且已经绑定过函数,判断两个值是否相同,如果相同不更新数据反之进行保存
      eventSettingIns.diffEventListenerCode(codeValue, this.currentEvent.eventName) ? saveCode() : (this.drawer = false)
    },
    saveEventCode() {
      this.$store.commit('updatePluginsProps', { id: this.options.id, modify: { id: 'custom.eventListener', value: eventSettingIns.eventListener } })
    },
    saveComponentEventCode(codeValue) {
      eventSettingIns.updateEventListener(this.currentEvent.eventName, codeValue)
      this.saveEventCode()
    },
    saveLinkageCompoentEventCode(codeValue) {
      eventSettingIns.updateEventListener(this.currentEvent.eventName, codeValue)
      this.updateLinkageEventConfigCheck(this.linkageEventConfig)
    },
    tableCellClick(row, column, event) {
      if (column.property === 'eventName') {
        if (!this.drawer) this.drawer = true
        this.currentEvent = Object.assign({}, row)
      }
    },
    closeDrawer() {
      this.currentEvent = {}
    },
    resetDialogData() {
      this.linkageEventSettingActiveIndex = 0
      eventSettingIns.setLinkageEventLevel()
      this.currentLinkageEvent = []
      this.openLinkageEventDialog = false
    },
    openLinkageEventSetting() {
      this.$refs.pageDialogViewRef.showDialog()
      this.openLinkageEventDialog = true
    },
    cancelDialogFn() {
      this.resetDialogData()
    },
    confirmDialogFn() {
      this.saveEventCode()
      this.resetDialogData()
    },
    previous() {
      if (this.linkageEventSettingActiveIndex > 0) {
        this.linkageEventSettingActiveIndex--
      }
    },
    next() {
      if (this.linkageEventSettingActiveIndex <= 1) {
        this.linkageEventSettingActiveIndex++
      }
    },
    selectComponentEvent(item) {
      eventSettingIns.setLinkageEventLevel(item.eventName, 0)
      this.currentLinkageEvent = [...eventSettingIns.linkageEventLevel];
      this.next()
    },
    selectLinkageComponent(item) {
      eventSettingIns.setLinkageEventLevel(item.id, 1)
      this.currentLinkageEvent = [...eventSettingIns.linkageEventLevel];
      // 获取联动组件对应数据配置
      let linkageEventConfig = this.pagePulgin.find(pluginItem => pluginItem.id === item.id).custom.linkageEventConfig
      this.updateLinkageEventConfigCheck(linkageEventConfig)
      this.next()
    },
    selectLinkageComponentEventType(item) {
      let currentEvent = eventSettingIns.setLinkageEventLevel(item.id, 2)

      if (currentEvent) {
        if (!this.drawer) this.drawer = true
        this.currentEvent = currentEvent;
      }

      this.currentLinkageEvent = eventSettingIns.linkageEventLevel
    },
    updateLinkageEventConfigCheck(linkageEventConfig) {
      let findLinkageEventData = eventSettingIns.findLinkageEvent()
      linkageEventConfig.map(linkageEventItem => (linkageEventItem['checked'] = findLinkageEventData.indexOf(linkageEventItem.id) > -1))
      this.linkageEventConfig = [...linkageEventConfig]
    }
  }
}
</script>

<style lang="scss">
.event-setting {
  &-title {
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid #42b983;
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 10px;
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
    .el-button--mini {
      width: 100%;
      border-radius: 0;
    }
  }
  &-dropdown {
    min-width: 276px;
    max-height: 60vh;
    overflow: auto;
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
    margin-bottom: 20px;
    &-table-des {
      font-size: 12px;
      color: #9e9e9e;
      font-weight: 500;
    }
    .el-cascader {
      width: 100%;
    }
  }
  &-code-edit {
    .el-drawer__header {
      margin-bottom: 0;
      padding: 10px;
    }
  }
  &-dialog {
    .linkage-dialog-title {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      padding: 20px 0 5px 0;
      font-size: 14px;
    }
    .linkage-dialog-tool {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;
      padding: 0 10px;
    }
    .linkage-dialog-content {
      max-height: 50vh;
      overflow-y: auto;
      border: 1px dashed #dcdfe6;
      margin-top: 10px;
    }
    .linkage-dialog-event {
      margin: 0;
      padding: 20px 10px;
      &-actived {
        color: #ffffff !important;
        background-color: #f0f9eb !important;
        color: #67c23a !important;
      }
      &-checked {
        background-color: #f0f9eb !important;
        color: #67c23a !important;
      }
      li {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #dcdfe6;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          border-color: #42b983;
          border-style: dashed;
        }
      }
    }
  }
}
</style>