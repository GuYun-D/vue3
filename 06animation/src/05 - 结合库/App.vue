<template>
  <div>
    <button @click="toggle">切换</button>
    <!-- <transition name="yun" mode="out-in" appear>
      <h2 v-if="isShow">你好，前端</h2>
    </transition> -->
    <transition enter-active-class="animate__animated animate__rubberBand" leave-active-class="animate__animated animate__flipInY">
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
/* .yun-enter-active {
  animation: bounceInUp 1s ease-in;
}

.yun-leave-active {
  animation: bounceInUp 1s ease-in reverse;
} */

.animate__flipInY{
  animation-direction: reverse;
}
</style>