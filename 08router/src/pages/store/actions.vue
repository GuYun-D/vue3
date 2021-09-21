<template>
  <div style="background: #f40">
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <!-- <button @click="increment">分发actions</button>
    <button @click="getData">获取数据</button> -->

    <button @click="incrementAction">分发actions</button>
    <button @click="getDataAction">获取数据</button>

    <button @click="add">分发actions</button>
  </div>
</template>

<script>
import { mapActions, useStore } from "vuex";
import { onMounted } from "vue";
export default {
  // methods: {
  //   increment(){
  //     this.$store.dispatch("incrementAction", {
  //       name: "action参数"
  //     })
  //   },
  //   getData(){
  //     // this.$store.dispatch("getDataAction")
  //     // 第二种派发风格
  //     this.$store.dispatch({
  //       type: "getDataAction"
  //     })
  //   }
  // }

  setup() {
    // 辅助函数
    const actions = mapActions(["incrementAction", "getDataAction"]);
    const actions1 = mapActions({
      add: "incrementAction",
      getDate: "getDataAction",
    });

    // 正常dispath
    const store = useStore();
    onMounted(() => {
      const promise = store.dispatch("getDataAction");
      promise
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      ...actions,
      ...actions1,
    };
  },
};
</script>

<style scoped>
</style>