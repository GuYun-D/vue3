<template>
  <div>{{ name }} - {{ counter }}</div>
  <div>{{ age }}</div>
  <button @click="changeHome">home+1</button>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const name = inject("name");
    const counter = inject("counter");
    // 第二个参数，如果没有取到就使用默认值
    const age = inject("age", 19);

    const changeHome = () => {
      counter.value ++
    }

    return {
      name,
      counter,
      age,
      changeHome
    };
  },
};
</script>

<style scoped>
</style>