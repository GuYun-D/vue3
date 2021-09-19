<template>
  <h1>头部</h1>
  <router-view></router-view>
  <h1>尾部</h1>
  <router-link to="/home">首页</router-link>
  <br />
  <router-link to="/about">关于</router-link>
  <br />
  <router-link to="/user/yunyun/id/123">用户</router-link>
</template>

<script>
export default {
  name: "App"
};
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
