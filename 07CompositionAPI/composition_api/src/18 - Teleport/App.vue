<template>
  <div class="counter-box">
    <h2>当前计数：{{ counter }}</h2>
    <button>+1</button>

    <!-- 下面就将内容移动到了#teleport元素里面，如果是组件也一样的 -->
    <teleport to="#teleport">
      <h2>当前计数：{{ counter }}</h2>
      <button>+1</button>
    </teleport>

    <teleport to="#teleport">
      <mark>哈哈哈哈哈哈哈哈哈</mark>
    </teleport>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
};
</script>

<style scoped>
</style>