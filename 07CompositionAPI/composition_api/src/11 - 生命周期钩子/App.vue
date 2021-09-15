<template>
  <div>
    <button @click="change">{{counter}}</button>
  </div>
</template>

<script>
/**
 * 生命周期的composition api是没有created和beforeCreate周期函数，
 * setup的执行是早于这两个周期函数的，所以这两个周期函数的操作直接在setup中操作就行
 */
import { onMounted, onUpdated, onUnmounted, ref } from "vue";
export default {
  setup() {
    const counter = ref(0)

    const change = () => {
      counter.value ++
    }

    onMounted(() => {
      console.log("app挂载");
    });

    onUpdated(() => {
      console.log("app数据更新");
    });

    onUnmounted(() => {
      console.log("app卸载");
    });

    return {
      counter, 
      change
    }
  },
};
</script>

<style scoped>
</style>