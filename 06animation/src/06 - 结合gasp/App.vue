<template>
  <div>
    <button @click="toggle">切换</button>
    <transition name="yun" mode="out-in" appear>
      <h2 v-if="isShow">你好，前端</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
</style>