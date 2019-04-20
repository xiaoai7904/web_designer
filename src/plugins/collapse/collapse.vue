<script>
export default {
  name: 'xaCollapse',
  data() {
    return {}
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          value: '1',
          accordion: false,
          simple: false,
          children: [{
            title: '折叠面板1',
            hideArrow: false,
            name: '1',
            content(h) {
              return <p slot="content">折叠面板1内容...</p>
            }
          }, {
            title: '折叠面板2',
            hideArrow: false,
            name: '2',
            content(h) {
              return <p slot="content">折叠面板2内容...</p>
            }
          }]
        }
      }
    }
  },
  render(h) {
    return (<div>
      <Collapse value={this.options.value} accordion={this.options.accordion} simple={this.options.simple}>
        {this.options.children.map(item => {
          return <Panel name={item.name} hideArrow={item.hideArrow}>
            {item.title}
            {item.content(h)}
          </Panel>
        })}
      </Collapse>
    </div>)
  },
  mounted() {
      console.log(this.options)
  }
}
</script>