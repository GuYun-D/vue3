<template>
  <div>
    <h2>我是navbar组件</h2>
    <button @click="getParentAndRoot">获取父组件和跟组件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message: "我是一条message"
      }
    },

    methods: {
      say(){
        console.log("say 方法");
      },

      getParentAndRoot(){
        console.log(this.$parent);
        console.log(this.$root);
        console.log(this.$parent === this.$root);
        // vue3移除了$children属性
      }
    }
  }
</script>

<style scoped>

</style>