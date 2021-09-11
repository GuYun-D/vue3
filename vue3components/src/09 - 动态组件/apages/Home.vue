<template>
  <div @click="pageClick">
    home组件
    <div>{{ name }}</div>
    <div>{{ num }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    num: Number,
  },

  emits: ["pageClick"],

  methods: {
    pageClick(){
      this.$emit("pageClick")
    }
  }
};
</script>

<style scoped>
</style>