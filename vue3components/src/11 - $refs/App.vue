<template>
  <div>
    <nav-bar ref="navBar"></nav-bar>

    <button @click="getDom">获取元素</button>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar
  },

  methods: {
    getDom(){
      console.log(this.$refs.navBar);
      console.log(this.$refs.navBar.message);
      this.$refs.navBar.say()
    }
  }
};
</script>

<style scoped>
</style>