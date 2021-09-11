<template>
  <div>
    <!-- <index></index> -->
    <CounterApp></CounterApp>
  </div>
</template>

<script>
// import Index from "./01 - Component split/Index";
import CounterApp from './02 - events/CounterApp.vue'
export default {
  components: {
    // Index,
    CounterApp
  },
};
</script>

<style scoped>
</style>
