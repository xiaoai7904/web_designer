<script>
export default {
  name: 'xaCalendar',
  data() { return {} },
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
    return <div class="xa-calendar" style={this.styles}>
      <el-calendar v-model={this.options.value}></el-calendar>
    </div>
  }
}
</script>

<style lang="scss">
</style>
