<template>
  <div>
    <h1>{{ info }}</h1>
    <button @click="changeInfo">click</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";
export default {
  setup() {
    const info = shallowRef({ name: "张三" });
    const changeInfo = () => {
      info.value.name = "李四";
      triggerRef(info)
    };
    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>