<template>
  <div>
    <input type="text" ref="input" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const input = ref(null);
    onMounted(() => {
      console.log(input.value);
      input.value.focus()
    });
    return {
      input,
    };
  },
};
</script>

<style scoped>
</style>