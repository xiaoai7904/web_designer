<script>
/* eslint-disable no-unused-vars */
import pageIconsConfig from './pageIconsConfig'

export default {
  name: 'pageIconsView',
  props: {
    checkIcons: String
  },
  data() {
    return {
      pageIconsConfig: pageIconsConfig,
      currentIcons: ''
    }
  },
  watch: {
    checkIcons: {
      handler(newValue) {
        this.currentIcons = newValue
      },
      immediate: true
    }
  },
  computed: {
    checkStyle() {
      return {
        borderStyle: 'dashed',
        color: this.$store.state.defaultThemeColor
      }
    }
  },
  methods: {
    checkIconsFn(item) {
      this.currentIcons = item
      this.$emit('check', item)
    }
  },
  mounted() {
  },
  render(h) {
    return <ul class="page-icons-view">
      {this.pageIconsConfig.map(item => {
        return <li class="page-icons-view__item" style={item === this.currentIcons ? this.checkStyle : ''} on-click={() => { this.checkIconsFn(item) }} key={item}>
          <i class={item}></i>
          <span class="page-icons-view__label">{item}</span>
        </li>
      })}
    </ul>
  }
}
</script>

<style lang="scss">
.page-icons-view {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
  margin-left: -5px;
  &__item {
    display: inline-block;
    font-size: 40px;
    text-align: center;
    border: 1px solid $--color-primary;
    width: 200px;
    height: 80px;
    padding: 0px 25px;
    margin-left: 5px;
    margin-bottom: 5px;
    &:hover {
      cursor: pointer;
      color: $--color-primary;
      border-style: dashed;
    }
  }
  &__label {
    display: block;
    font-size: 14px;
  }
}
</style>
