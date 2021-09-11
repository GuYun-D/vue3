<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <br>
    <input type="text" v-model.number="N">
    <button @click="add">添加N</button>
  </div>
</template>

<script>
export default {
  // emits:["add", "sub", "addN"],
  emits: {
    // 目的是为了参数验证
    add: null,
    sub: null,
    // 一个参数的情况
    // addN: payload => {
    //   console.log(payload);
    // }
    addN: (num, age, name) => {
      console.log(num, age, name);
      if(num > 5){
        return true
      }

      return false
    }
  },

  data(){
    return {
      N: 0
    }
  },
  methods: {
    increment() {
      console.log("+1");
      this.$emit("add")
    },

    decrement() {
      console.log("-1");
      this.$emit("sub")
    },

    add(){
      this.$emit("addN", this.N, 70, "滚蛋")
    }
  },
};
</script>

<style scoped>
</style>