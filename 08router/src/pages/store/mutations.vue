<template>
  <div style="background: skyblue">
    <p>当前计数：{{ $store.state.counter }}</p>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="increment_n({name: 'setup'})">+100</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { INCREMENT_N } from "../../store/mutation-type";
export default {
  // methods: {
  //   addN() {
  //     // 第一种提交方式
  //     // this.$store.commit("incrementN", 100);

  //     // 第二种提交方式
  //     this.$store.commit({
  //       type: INCREMENT_N,
  //       name: "123",
  //       age: 24,
  //       n: 1,
  //     });
  //   },
  // },

  setup() {
    const storeMutations = mapMutations([
      "increment",
      "decrement",
      INCREMENT_N,
    ]);

    return {
      ...storeMutations,
    };
  },
};
</script>

<style scoped>
</style>