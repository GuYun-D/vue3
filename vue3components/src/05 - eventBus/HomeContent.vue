<template>
  <div></div>
</template>

<script>
import emitter from "./eventbus";
import { WHY_EVENT } from "./contants";
import { KOBE } from "./contants";

export default {
  created() {
    // emitter.on(WHY_EVENT, (info) => {
    //   console.log(info);
    // });

    // emitter.on(KOBE, (info) => {
    //   console.log(info);
    // });

    // 监听所有事件
    emitter.on("*", (type, info) => {
      console.log("----------------------------------------------------------");
      console.log(type, info);
    });

    /**
     * 取消事件监听
     * 1.取消所有事件监听：emitter.all.clear()
     * 
     * 2.取消一个事件监听：emitter.off('名字', 函数)
     *  定义一个函数：function onFoo(){}
     *  监听：emitter.on('foo', onFoo)
     *  取消：emitter.off('foo', onFoo)
     */
  },
};
</script>

<style scoped>
</style>