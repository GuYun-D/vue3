<template>
  <div>
    <button @click="toggle">toggle</button>
    <transition name="yun">
      <h2 v-show="isShow">你好，vue3动画</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
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
.yun-enter-from,
.yun-leave-to {
  opacity: 0;
}

.yun-enter-to,
.yun-leave-from {
  opacity: 1;
}

.yun-enter-active,
.yun-leave-active {
  transition: opacity 2s;
}
</style>