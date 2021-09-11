<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
// log(this) -> undefined
import { computed } from "vue";

export default {
  components: {
    Home,
  },
  // 本组件之间不能使用
  // provide: {
  //   name: "组件传值",
  //   desc: "非父子组件传值"
  // },
  provide() {
    return {
      name: "组件传值",
      desc: "非父子组件传值",
      // length: this.names.length
      length: computed(() => {
        return this.names.length;
      }).value,
    };
  },

  data() {
    return {
      names: ["张三", "李四", "王五"],
    };
  },
};
</script>

<style scoped>
</style>