<template>
  <div>
    <h1>{{ info.name }} - {{ info.age }}</h1>
    <mark>{{ age }}</mark>
    <br />
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const info = reactive({
      name: "张三",
      age: 20,
    });

    // 这样通过结构的方法获取到的数据，并不是响应式的
    // 就相当于是：let name = info.name,使用torefs api就可以实现响应式了
    // let { name, age } = info;
    // let { name, age } = toRefs(info);
    let age = toRef(info, "age");

    const changeAge = () => {
      info.age++;
      age.value++;
    };

    return {
      info,
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>