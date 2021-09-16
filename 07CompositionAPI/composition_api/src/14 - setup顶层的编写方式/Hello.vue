<template>
  <div>
    你好组件
    <br>
    <mark>{{message}}</mark>
    <button @click="emitEvent">发送事件</button>
  </div>
</template>

<script setup>
// 获取传递过来的props
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  message: {
    type: String,
    default: "默认值，哈哈哈",
  },
});

const emit = defineEmits(['increment', "decrement"])

const emitEvent = () => {
  emit('increment', 100000)
}
</script>

<style scoped>
</style>