<template>
  <div></div>
</template>

<script>
// 通过getCurrentInstance获取组件实例
import { getCurrentInstance } from "vue";
export default {
  // mounted(){
  //   // options api的方式获取数据的时候直接使用this
  //   console.log(this.$name);
  // }

  setup() {
    const instance = getCurrentInstance();
    // appContext相当于是app
    console.log(instance.appContext.config.globalProperties.$name);


  },
};
</script>

<style scoped>
</style>