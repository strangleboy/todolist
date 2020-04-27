<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">TODOLIST</router-link>__
      <router-link to="/done">DONELIST</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  widtH: 100%;
}
label{
  margin: 0;
}
#nav {
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 30px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul{
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 300px;
  overflow: auto;
  li{
    list-style: none;
    width: 90%;
    text-align: left;
    margin: auto;
    border-bottom: 1px solid #b1aeae;
    display: flex;
    align-items: center;
    line-height: 60px;
    & span{
      margin-right: 20px;
    }
    & label{
      width: 70%;
      word-break: break-all;
    }
  }
}
</style>
