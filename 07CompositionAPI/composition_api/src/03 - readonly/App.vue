<template>
  <div>
    <button @click="updateState">点击</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";
export default {
  setup(props, { attrs, slots, emit }) {
    // 普通对象
    const info = {
      name: "yun",
    };

    const infoReadonly = readonly(info);
    // 局部函数
    const updateState = () => {
      // infoReadonly.name = 'hui'
      info2Readonly.name = "hui";
    };

    // 响应式的对象
    const info2 = reactive({
      name: "why",
    });

    const info2Readonly = readonly(info2);

    // 在给子组件传递数据时，应该传递响应式的数据
    // 因为info2是可以进行修改的

    return {
      updateState,
    };
  },
};
</script>

<style scoped>
</style>