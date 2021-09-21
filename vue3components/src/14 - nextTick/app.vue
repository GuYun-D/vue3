<template>
  <div>
    <div ref="titleRef" class="title">信息：{{ message }}</div>
    <br />
    <button @click="addMessage">添加信息</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from "vue";
export default {
  setup() {
    const message = ref("哈哈哈");
    const titleRef = ref(null);
    const addMessage = () => {
      message.value += "你妹的";
      console.log(titleRef.value.offsetHeight);
    };

    onUpdated(() => {
      console.log(titleRef.value.offsetHeight);
    });

    nextTick(() => {
      console.log(titleRef.value.offsetHeight);
    })

    return {
      message,
      addMessage,
      titleRef,
    };
  },
};
</script>

<style scoped>
.title {
  color: #f40;
}
</style>