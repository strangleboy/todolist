<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import jwtDecode from 'jwt-decode'
export default {
  name: 'app',
  created () {
    if (localStorage.wxUserToken) {
      const decode = jwtDecode(localStorage.wxUserToken)
      this.$store.dispatch('setUser', decode)
    }
  }
}
</script>
<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  background: rgb(233, 232, 232);
}
</style>
