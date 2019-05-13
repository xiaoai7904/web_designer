<template>
  <div class="item-list">
    <draggable
      tag="el-collapse"
      :list="list"
      :component-data="collapseComponentData"
      handle=".handle-sort"
    >
      <el-collapse-item
        v-for="(item,index) in list"
        :key="item.id"
        :title="item.label"
        :name="item.id"
        @mouseenter.native="showDel(index)"
        @mouseleave.native="hideDel"
      >
        <template slot="title">
          <i class="el-icon-more handle-sort"></i>
          {{item.label}}
          <i
            class="el-icon-delete handle-del"
            v-show="currentIndex === index"
            @click.stop.prevent="del(item)"
          ></i>
        </template>
        <slot :data="item"></slot>
      </el-collapse-item>
    </draggable>
    <el-button type="text" icon="el-icon-plus" @click="add">新增列表项</el-button>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { extend, uuid } from '@/modules/utils/utils';

export default {
  name: 'itemList',
  props: {
    list: Array,
    id: String,
    ins: Object
  },
  data() {
    return {
      collapseComponentData: {
        on: {
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      },
      activeNames: [],
      currentIndex: -1
    }
  },
  components: { draggable },
  methods: {
    inputChanged(val) {
      this.activeNames = val;
    },
    showDel(index) {
      this.currentIndex = index
    },
    hideDel() {
      this.currentIndex = -1
    },
    del(data) {
      if (this.list.length === 1) {
        this.$message({
          message: '至少保留一条数据!',
          type: 'warning'
        });
        return false
      }
      this.$store.commit('updatePluginsProps', {
        id: this.ins.options.id,
        modify: { id: this.id, value: extend(true, [], this.list).filter(item => data.id !== item.id) }
      })
    },
    add() {
      let addData = Object.assign({}, this.list[this.list.length - 1], { id: uuid() })

      this.$store.commit('updatePluginsProps', {
        id: this.ins.options.id,
        modify: { id: this.id, value: [].concat(this.list, [addData]) }
      })
    }
  }
}
</script>
<style lang="scss">
.item-list {
  &__ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__li {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    margin-bottom: 10px;
    &-label {
      display: inline-block;
      width: 64px;
    }
  }
  .el-collapse-item__header {
    padding-left: 10px !important;
    height: 35px !important;
    background-color: #fff !important;
    color: #606266 !important;
    &:hover {
      background-color: #e6e6e6 !important;
      color: #606266 !important;
    }
  }
  .el-collapse-item__header.is-active {
    background-color: #e6e6e6 !important;
    color: #606266 !important;
  }
  .el-collapse-item__wrap {
    background-color: rgb(243, 242, 242) !important;
  }
  .handle-sort {
    margin-right: 5px;
    transform: rotate(90deg);
    cursor: move;
  }
  .handle-del {
    margin: 0 0 0 150px;
    &:hover {
      color: #42b983;
    }
  }
  .el-button--text {
    color: #42b983;
  }
}
</style>
