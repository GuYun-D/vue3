<template>
  <div>
    <h1 v-format-time="'YYYY/M/DD'">{{timesTamp}}</h1>
  </div>
</template>

<script>
export default {
  setup(){
    let timesTamp = 1631840004

    return {
      timesTamp
    }
  }
};
</script>

<style scoped>
</style>