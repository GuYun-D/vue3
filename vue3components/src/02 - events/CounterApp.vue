<template>
  <div>
    <h2>当前计数： {{ counter }}</h2>
    <CounterOperation @add="addOne" @sub="subOne" @addN="addN"></CounterOperation>
  </div>
</template>

<script>
import CounterOperation from "./CounterOperation";
export default {
  data() {
    return {
      counter: 0,
    };
  },

  components: {
    CounterOperation,
  },

  methods: {
    addOne(){
      this.counter++
    },
    subOne(){
      this.counter--
    },

    addN(num, age, name){
      console.log(num, age, name);
      this.counter += num
    }
  }
};
</script>

<style scoped>
</style>