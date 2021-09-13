<template>
  <div>
    {{ title }}
    <br />
    {{ message }}
    <br />
    <button @click="foo">点我</button>

    <hr />

    <About></About>
  </div>
</template>

<script>
import About from "./pages/About";
import { demoMixin } from "./mixins/demoMinxin";
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "app组件的title",
      message: "app中的message",
    };
  },

  components: {
    About,
  },

  methods: {
    foo() {
      console.log("app中的函数");
    },
  },

  created() {
    console.log("app created生命周期");
  },
};
</script>

<style scoped>
</style>