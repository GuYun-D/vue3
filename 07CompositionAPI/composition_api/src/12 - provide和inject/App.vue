<template>
  <div>
    <h1>{{ counter }}</h1>
    <Home></Home>

    <button @click="increment">点我</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";
export default {
  setup() {
    const name = ref("张三");
    let counter = ref(100);

    /**
     * 数据是共享出去了，但是为了保护单向数据流，子组件不允许修改父组件的数据
     * 所以在数据共享之前，用readonly包裹一下
     */
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    const increment = () => {
      counter.value++;
    };

    return {
      increment,
      counter,
    };
  },

  components: {
    Home,
  },
};
</script>

<style scoped>
</style>