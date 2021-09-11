<template>
  <div>
    <MySlotCpn>
      <button>我是一个按钮</button>
    </MySlotCpn>

    <MySlotCpn>
      <my-btn>我是一个按钮</my-btn>
    </MySlotCpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn";
import MyBtn from "./MyBtn";

export default {
  name: "App",
  components: {
    MySlotCpn,
    MyBtn
  },
};
</script>

<style scoped>
</style>