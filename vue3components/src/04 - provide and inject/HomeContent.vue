<template>
  <div>
    <h1>{{name}}</h1>
    <div>{{desc}}</div>
    <p>{{length}}</p>
  </div>
</template>

<script>
  export default {
    // 注入数据
    inject: ["name", "desc", "length"]
  }
</script>

<style scoped>

</style>