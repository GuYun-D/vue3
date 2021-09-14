<template>
  <div>
    <Home id="home" message="啊哈哈哈啊哈"></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },

  setup(props, context) {
    console.log(props);
  },
};
</script>

<style scoped>
</style>