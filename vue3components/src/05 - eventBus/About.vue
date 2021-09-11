<template>
  <div>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
import emitter from './eventbus';

export default {
  data(){
    return {

    }
  },

  methods: {
    btnClick(){
      console.log("about组件");
      emitter.emit("why", {name: "事件总线", num: 10293})
      emitter.emit("kobe", {name: "kobe", desc: "哈哈啊"})
    }
  }
};
</script>

<style scoped>
</style>