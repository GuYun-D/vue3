<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="increment">点我</button>

    <Hello message="传递过去的哈哈哈" @increment="getCounter"></Hello>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

// 不用注册，直接用
import Hello from "./Hello.vue";
const counter = ref(0);
const increment = () => {
  counter.value++;
};

const getCounter = (payload) => {
  console.log(payload);
};
</script>

<style scoped>
</style>