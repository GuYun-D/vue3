<template>
  <div>
    <h1>Home 组件</h1>
    <mark>message</mark>
    <p>{{ title }}</p>
    <div>
      当前计数<span>{{ state.counter }}</span>
    </div>
    <button @click="increamen">点击</button>
    <p>{{ info }}</p>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      title: "Data中的title",
      info: "一条信息",
    };
  },

  setup(props, { attrs, slots, emit }) {
    console.log(attrs.id);

    // 这样定义，就是一个很普通的，没有响应式的
    // 如果要响应式的，那就必须使用reactive函数
    // let counter = 100;
    const state = reactive({
      counter: 100
    })

    // 局部函数
    const increamen = () => {
      state.counter++;
    };

    return {
      title: "标题",
      state,
      increamen,
    };
  },
};
</script>

<style scoped>
</style>