<!--
 * @Date: 2021-05-07 09:18:33
 * @LastEditors: WY
 * @LastEditTime: 2021-05-07 16:07:37
 * @Description: 
 * @FilePath: \hello-world\src\App.vue
 * @Signature: The warm smile,if the quality.
-->
<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
