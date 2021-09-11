<template>
  <div>
    <home></home>
    <AsyncCategory></AsyncCategory>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import { defineAsyncComponent } from "vue";
// const AsyncCategory = defineAsyncComponent(() => import("./asyncCategory.vue"))
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./asyncCategory.vue"),
  /**
   * loadingComponent属性的作用是，本组件是一个异步组件，可能
   * 还没有加载出来，出现白屏，所以预设一个本组件还在加载的时候显式的组件
   */
  loadingComponent: Loading,
  // 组件加载失败显示
  // errorComponent: Component

  // 延迟,在显示loadingComponent显示之前，等待多久时间
  delay: 2000,

  /**
   * 监听错误
   * err: 错误信息
   * retry: 函数，调用的话会重新加载
   * attempts记录了尝试的次数
   */
  onError: function(err, retry, attempts){}
});

import Home from "./Home.vue";
export default {
  components: {
    Home,
    AsyncCategory,
  },
};
</script>

<style scoped>
</style>