<template>
  <div>
    <button @click="toggle">toggle</button>
    <!-- <transition name="yun" :duration="3000"> -->
    <transition name="yun" :duration="{enter: 1000, leave: 1000}" mode="out-in">
      <h2 v-if="isShow">你好，vue3动画</h2>
      <h2 v-else>你好，前端</h2>
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

.yun-enter-active,
.yun-leave-active{
  transition: opacity 1s ease;
}

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