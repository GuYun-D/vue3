<template>
  <h2>
    {{ titleN }}
  </h2>
</template>

<script>
export default {
  props: {
    titleN: String
  }
};
</script>

<style scoped>
h2{
  color: #f40;
  background-color: skyblue;
}
</style>