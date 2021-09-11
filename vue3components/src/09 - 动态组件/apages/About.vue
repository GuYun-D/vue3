<template>
  <div>
    about组件
      <button @click="increament">
        {{ counter }}
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increament() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
</style>