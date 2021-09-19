<template>
  <div>
    <mark>user 组件: {{ $route.params.username }}</mark>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  created() {
    // setup先执行
    // console.log(this.$route.params);
  },

  setup() {
    // 该函数是为了获取当前组件的路由对象
    const route = useRoute()
    console.log(route.params);
  },
};
</script>

<style scoped>
</style>