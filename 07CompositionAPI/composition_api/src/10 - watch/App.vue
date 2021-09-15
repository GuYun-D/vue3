<template>
  <div>
    <h1>{{ info.name }}</h1>
    <button @click="changeDate">点我</button>

    <div>{{ name }}</div>
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

    const name = ref("yunyun");

    // watch([info, name], (newVal, oldVal) => {
    //   // 当前newVal中就是一个数组，info是一个reactive对象，而name是一个ref对象
    //   // 所以当前数组一个是reactive对象，一个就是数据，可以结构出来
    //   console.log("newVal:", newVal, "oldVal:", oldVal);
    // });

    // watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
    //   console.log(newInfo);
    //   console.log(newName);
    //   console.log(oldInfo);
    //   console.log(oldName);
    // });

    watch(
      // 将reactive对象转成getter并做解构，这样newInfo就是一个普通的对象
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo);
        console.log(newName);
        console.log(oldInfo);
        console.log(oldName);
      },
      {
        // 深度侦听
        deep: true,
        // 立即执行
        immediate: true,
      }
    );

    // 如果第一个参数是一个reactive对象，并且没有解构，默认是深度监听
    // watch(info, (newVal, oldVal) => {
    //   console.log("newVal:", newVal, "oldVal:", oldVal);
    // });

    const changeDate = () => {
      info.name = "王五";
      name.value = "王二麻子";
    };

    return {
      changeDate,
      info,
      name,
    };
  },
};
</script>

<style scoped>
</style>