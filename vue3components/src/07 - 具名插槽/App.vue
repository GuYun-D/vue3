<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <button>左边按钮</button>
      </template>
      <template v-slot:center>
        <h2>我是标题</h2>
      </template>
      <template v-slot:right>
        <button>右边按钮</button>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>