<template>
  <div>
    <h1>{{name}}</h1>
    <div>{{desc}}</div>
  </div>
</template>

<script>
  export default {
    // 注入数据
    inject: ["name", "desc"]
  }
</script>

<style scoped>

</style>