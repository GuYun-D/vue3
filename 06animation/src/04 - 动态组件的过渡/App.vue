<template>
  <div>
    <button @click="toggle">toggle</button>
    <!-- <transition name="yun" :duration="3000"> -->

    <transition
      name="yun"
      :duration="{ enter: 1000, leave: 1000 }"
      mode="out-in"
      appear
    >
      <!--appear 初次渲染的时候加上动画  -->
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>

    {{ isShow }}
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },

  components: {
    Home,
    About,
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
.yun-leave-active {
  transition: opacity 1s ease;
}

.yun-enter-active {
  animation: myAni 1s ease;
}

.yun-leave-active {
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