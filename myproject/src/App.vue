<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
@import url('./assets/css/reset.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  /* margin-top: 60px; */
}
.el-card__header{
  font-size: 34px;
}
.el-aside{
  overflow: hidden;
}
.el-pagination {
    text-align: right;
    margin: 20px;
  }
</style>
