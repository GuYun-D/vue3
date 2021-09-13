<template>
  <div>
    <h1>about</h1>
    <br />
    {{ content }}
    <br />
    {{ title }}
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";

export default {
  extends: BasePage,
  data() {
    return {
      content: "哈哈哈",
    };
  },
};
</script>

<style scoped>
</style>