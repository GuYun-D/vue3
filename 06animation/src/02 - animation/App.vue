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
.yun-enter-active {
  animation: myAni 1s ease;
}

.yun-leave-active{
  animation: myAni 1s ease reverse; 
}

@keyframes myAni {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>