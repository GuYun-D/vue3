<template>
  <div>{{ name }} - {{ age }}</div>
  <button @click="changeName">name</button>
  <button @click="changeAge">age</button>
</template>

<script>
import { ref, watchEffect, watch } from "vue";
export default {
  setup() {
    let name = ref("yun");
    let age = ref(20);
    const changeName = () => {
      name.value = "孤";
    };

    /**
     * 默认页面一打开就会执行回调一次 依赖要放在回调里面才能进行监听
     * 停止侦听：watchEffect函数会返回一个函数，调用这个函数，侦听器就会停止侦听
     */
    const stop = watchEffect((onInvalidate) => {
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // 
        console.log("副作用清除");
      })
      console.log("name", name.value, "age", age.value);
    });

    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return { name, age, changeName, changeAge };
  },
};
</script>

<style scoped>
</style>