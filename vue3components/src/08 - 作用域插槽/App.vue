<template>
  <div>
    <ShowNames :names="names">
      <template v-slot:yun="slotProps">
        <button>{{slotProps.item}}</button>
      </template>
    </ShowNames>

    <!-- 独占默认插槽的缩写，就是没有具名插槽的时候 -->
    <ShowNames :names="names" v-slot="slotProps">
        <button>{{slotProps.item}}</button>
    </ShowNames>
  </div>
</template>

<script>
import ShowNames from "./ShowNames.vue";
export default {
  components: {
    ShowNames,
  },
  data() {
    return {
      names: ["张三", "李四", "王二麻子"],
    };
  },
};
</script>

<style scoped>
</style>