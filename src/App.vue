<template>
  <div id="app" class="ui-designer">
    <keep-alive :include="['home']">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',

  mounted() {
    // 挂载app组件实例
    window.appComponentInstace = this
    
    let pagePlugins = window.localStorage.getItem('pagePlugins')

    let plugins = JSON.parse(pagePlugins, (key, value) => {
      if (key === 'render') {
        return eval("(function(){return " + value + " })()")
      }
      return value
    })

    if (pagePlugins && plugins && plugins.length) {
      plugins.forEach(item => {
        this.$store.commit('addPlugin', item)
      })
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
