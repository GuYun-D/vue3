<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";
export default {
  setup() {
    const title = ref(null);
    watchEffect(() => {
      console.log(title.value);
    }, {
      // 默认是pre，就是提前执行
      // post,dom挂载完成之后执行
      flush: "post"
    });
    return {
      title,
    };
  },
};
</script>

<style scoped>
</style>