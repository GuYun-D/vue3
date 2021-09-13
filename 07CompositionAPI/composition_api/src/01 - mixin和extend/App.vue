<template>
  <div>
    {{ title }}
    <br />
    {{ message }}
    <br />
    <button @click="foo">点我</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMinxin";
export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "app组件的title",
    };
  },

  methods: {},
};
</script>

<style scoped>
</style>