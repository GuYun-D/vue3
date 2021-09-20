<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">+1</button>
    <pre>{{ message }}</pre>

    <router-link to="/vuex/full">封装了</router-link>
    <router-link to="/vuex/getters">getters</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore, mapState } from "vuex";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => {
      return store.state.counter;
    });

    const storeStateFns = mapState(["message", "ui"]);
    /**
     * storeState对应的是一个对象，对象中都是一个key对应着一个函数
     * {
     *  message： function(){},
     *  ui: function(){}
     * }
     */
    console.log(storeStateFns);

    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({$store: store});
      storeState[fnKey] = computed(fn);
    });
    /**
     * 通过上面的操作，就可以改成storeState = {
     *    message： ref，
     *    ui：ref
     * }
     * 
     * 对上面的操作进行了封装，在page里面
     */

    return {
      count,
      ...storeState,
    };
  },
};
</script>

<style scoped>
</style>