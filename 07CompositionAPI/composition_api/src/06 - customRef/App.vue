<template>
  <div>
    <input type="text" v-model="message" />
    <mark>{{ message }}</mark>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
import debounceRef from "./hook/usedebounceRef";
export default {
  setup() {
    const message = debounceRef("hello world");

    return {
      message,
    };
  },
};
</script>

<style scoped>
</style>