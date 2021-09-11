<template>
  <div>
    <Tabs :titles="titles" @titleClick="titleClick"></Tabs>
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  name: "App",
  data() {
    return {
      titles: ["衣服", "鞋子", "裤子"],
      contents: ["衣服页面", "鞋子页面", "裤子页面"],
      currentIndex: 0,
    };
  },
  components: {
    Tabs,
  },

  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
  },
};
</script>

<style scoped>
</style>