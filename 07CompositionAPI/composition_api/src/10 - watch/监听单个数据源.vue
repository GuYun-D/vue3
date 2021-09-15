<template>
  <div>
    <h1>{{ info.name }}</h1>
    <button @click="changeDate">点我</button>

    <div>{{name}}</div>
  </div>
</template>

<script>
import { watch, ref, reactive, watchEffect } from "vue";
export default {
  setup() {
    const info = reactive({
      name: "张三",
      age: 18,
    });

    // 传入getter函数
    // watch(
    //   () => info.name,
    //   (newVal, oldVal) => {
    //     console.log("newVal:", newVal, "oldVal:", oldVal);
    //   }
    // );

    // 传入一个reactive的对象
    // watch(
    //   info,
    //   (newVal, oldVal) => {
    //     // 当前拿到的newVal和oldVal都是reactive的对象
    //     // Proxy {name: '王五', age: 18} oldVal: Proxy {name: '王五', age: 18}
    //     console.log("newVal:", newVal, "oldVal:", oldVal);
    //   }
    // );

    watch(
      // 转成getter并作解构
      () => {
        return {...info}
      },
      (newVal, oldVal) => {
        // 这样拿到的结果就是一个普通的对象
        // newVal: {name: '王五', age: 18} oldVal: {name: '张三', age: 18}
        console.log("newVal:", newVal, "oldVal:", oldVal);
      }
    );

    // 传入一个ref的对象
    const name = ref("yunyun")
    watch(name, (newVal, oldVal) => {
      // 当前拿到的newVal和oldVal都是value值：newVal: 王二麻子 oldVal: yunyun
      console.log("newVal:", newVal, "oldVal:", oldVal);
    });

    const changeDate = () => {
      info.name = "王五";
      name.value = "王二麻子"
    };

    return {
      changeDate,
      info,
      name
    };
  },
};
</script>

<style scoped>
</style>