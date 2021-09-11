<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  // 本组件之间不能使用
  provide: {
    name: "组件传值",
    desc: "非父子组件传值"
  }
};
</script>

<style scoped>
</style>