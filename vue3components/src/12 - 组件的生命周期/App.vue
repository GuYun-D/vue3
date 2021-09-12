<template>
  <div>
    <template v-if="isShow">
      <home></home>
    </template>

    <button @click="toggle">切换</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
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