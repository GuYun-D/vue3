<template>
  <h1>头部</h1>

  <!-- 
  Component：拿到当前切换的组件
  route：路由对象
 -->
  <router-view v-slot="props">
    <transition name="yun">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>

  <h1>尾部</h1>
  <router-link to="/home">首页</router-link>
  <br />
  <router-link to="/about">关于</router-link>
  <br />
  <router-link to="/user/yunyun/id/123">用户</router-link>
</template>

<script>
export default {
  name: "App",
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

.yun-enter-from,
.yun-leave-to {
  opacity: 0;
}

.yun-enter-active,
.yun-leave-active {
  transition: opacity 1s ease;
}

.yun-enter-to,
.yun-leave-from {
  opacity: 1;
}
</style>
