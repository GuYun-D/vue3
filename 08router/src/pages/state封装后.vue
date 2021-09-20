<template>
  <div>
    <h1>{{ counter }}</h1>
    <pre>{{ ui }}</pre>
  </div>
</template>

<script>
import { useState } from "../hooks/useState";
export default {
  setup() {
    const storeState = useState(["counter", "message", "ui"])
    return {
      ...storeState
    };
  },
};
</script>

<style scoped>
</style>