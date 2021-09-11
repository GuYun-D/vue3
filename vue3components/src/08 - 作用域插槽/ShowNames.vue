<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <!-- <slot name="yun" :item="item" :index="index"></slot> -->
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
span {
  padding: 10px;
}
</style>