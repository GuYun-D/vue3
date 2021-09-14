<template>
  <div>
    <h1>Home 组件</h1>
    <mark>message</mark>
    <p>{{ title }}</p>
    <div>
      当前计数<span>{{ counter }}</span>
    </div>
    <button @click="increamen">点击</button>
    <p>{{ info }}</p>
  </div>
</template>

<script>
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
    let counter = 100;

    // 局部函数
    const increamen = () => {
      counter++;
    };

    return {
      title: "标题",
      counter,
      increamen,
    };
  },
};
</script>

<style scoped>
</style>