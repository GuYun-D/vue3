<template>
  <div>
    <input type="text" ref="input" v-yun.aaa.bbb="'我是参数字符串'" v-focus />
  </div>
</template>

<script>
export default {
  // 局部指令
  directives: {
    //   focus: {
    //     mounted(el, bindings, vnode, preVnode) {
    //       console.log("focus mounted");
    //       el.focus;
    //     },
    //   },
    yun: {
      // 每一个生命周期都有四个参数el, bindings, vnode, preVnode
      created(el, bindings, vnode, preVnode) {
        // 获取指令传递过来的数据
        console.log(bindings.value);
        // 获取指令修饰符
        console.log(bindings.modifiers);
        console.log("yun created");
      },

      beforeMount() {
        console.log("yun beforeMount");
      },

      mounted() {
        console.log("yun mounted");
      },

      beforeUpdate() {
        console.log("yun beforeUpdate");
      },
    },
  },
};
</script>

<style scoped>
</style>