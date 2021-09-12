<template>
  <div>
    <!-- <HyInput v-model="message"></HyInput> -->
    <HyInput v-model="message"></HyInput>
    {{message}}
    <!-- 如果没有指定属性名，组件默认的属性名是modelValue -->
    <!-- <HyInput :modelValue="message" @update:model-value="message = $event"></HyInput> -->
  </div>
</template>

<script>
import HyInput from "./MyInput.vue";
export default {
  components: {
    HyInput,
  },
  data() {
    return {
      message: "组件的v-model",
    };
  },
};
</script>

<style scoped>
</style>