<template>
  <div>
    <h2>Home组件</h2>
    <p>{{ message }}</p>
    <button @click="msgChange">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是一条消息",
    };
  },

  methods: {
    msgChange() {
      this.message = "我变了";
    },
  },

  // 组件的实例创建之前
  beforeCreate() {
    console.log("Home beforeCreate 组件的实例创建之前");
  },

  // 组件实例创建完成
  created() {
    console.log("Home created 组件实例创建完成");
  },

  // 组件挂载之前
  beforeMount() {
    console.log("Home beforeMount 组件挂载之前");
  },

  // 组件挂载完成
  mounted() {
    console.log("Home mounted 组件挂载完成");
  },

  // 组件卸载之前
  beforeUnmount() {
    console.log("Home beforeUnmount 组件卸载之前");
  },

  // 组件卸载
  unmounted() {
    console.log("Home unmounted 组件卸载");
  },

  // Dom更新之前
  beforeUpdate() {
    console.log("Home beforeUpdate Dom更新之前");
  },

  // Dom更新完成之后
  updated() {
    console.log("Home updated DOM更新之后");
  },
};
</script>

<style scoped>
</style>