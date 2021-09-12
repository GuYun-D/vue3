<template>
  <div>
    about组件
      <button @click="increament">
        {{ counter }}
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increament() {
      this.counter++;
    },
  },

  created(){
    console.log("执行了created生命周期钩子");
  },

  unmounted(){
    console.log("执行了unmounted生命周期钩子");
  },

  activated(){
    console.log("组件活跃了");
  },

  deactivated(){
    console.log("组件失活了");
  }
};
</script>

<style scoped>
</style>