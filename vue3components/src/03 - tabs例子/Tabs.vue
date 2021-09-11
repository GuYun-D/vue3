<template>
  <div class="tabs">
    <div
      :class="{ active: currentIndex == index }"
      class="title"
      v-for="(title, index) in titles"
      :key="title"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["titleClick"],
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  name: "Tabs",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("titleClick", index)
    },
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-content: center;
}

.title {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgb(153, 138, 132);
}

.title.active span{
  border-bottom: 2px solid #111;
}

.active{
  background-color: #f40;
}
</style>