<template>
  <div id="app" class="ui-designer">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',

  mounted() {
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
