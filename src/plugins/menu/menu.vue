<script>
export default {
  name: 'xaMenu',
  props: {
    options: Object
  },
  methods: {},
  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%'
      }
    }
  },
  render(h) {
    return <div class="xa-menu" style={this.styles}>
      <el-menu
        default-active={this.options.defaultActive}
        mode={this.options.mode}
        // collapse={this.options.collapse}
        background-color={this.options.backgroundColor}
        text-color={this.options.textColor}
        active-text-color={this.options.activeTextColor}
        // unique-opened={this.options.uniqueOpened}
        // menu-trigger={this.options.menuTrigger}
        router={this.options.router}
        // collapse-transition={this.options.collapseTransition}
      >
        {this.options.children.map((item, index) => {
          if (!item.children) {
            return <el-menu-item index={item.index} disabled={item.disabled}>
              <i class={item.iconClass}></i>
              <span slot="title">{item.title}</span>
            </el-menu-item>
          }
          return <el-submenu index={item.index}>
            <template slot="title">
              <i class={item.iconClass}></i>
              <span slot="title">{item.title}</span>
            </template>
            <el-menu-item-group>
              {item.children.map(lastChildrenItem => {
                return <el-menu-item index={lastChildrenItem.index} disabled={lastChildrenItem.disabled}>{lastChildrenItem.title}</el-menu-item>
              })}
            </el-menu-item-group>

          </el-submenu>
        })}
      </el-menu>
    </div>
  }
}
</script>

<style lang="scss">
</style>