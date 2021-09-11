<template>
  <div>
    <button
      :class="{ active: currentTab === item }"
      v-for="(item, index) in tabs"
      @click="itemClick(item)"
      :key="item"
    >
      {{ item }}
    </button>

    <!-- 方法一 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-if="currentTab === 'category'">
      <category></category>
    </template> -->

    <!-- 动态组件 is的取值必须是一个注册过的组件名字 -->
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import Home from "./apages/Home.vue";
import About from "./apages/About.vue";
import Category from "./apages/Category.vue";
export default {
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },

  components: {
    Home,
    Category,
    About,
  },

  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #f40;
}
</style>