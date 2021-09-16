<template>
  <div class="container">
    {{ counter }}
    {{ doubleCounter }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <div class="scroll">
      <div class="scroll-x">scroll-x:{{ scrollX }}</div>
      <div class="scroll-y">scroll-y:{{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div>X:{{ mouseX }}</div>
      <div>Y:{{ mouseY }}</div>
    </div>

    <mark> {{ data }} </mark>
    <button @click="changeData">修改</button>
  </div>
</template>

<script>
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks";

export default {
  setup() {
    // 建议这样使用
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // useTitle
    const titleRef = useTitle("计数器");
    setTimeout(() => {
      titleRef.value = "title变化了";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();
    // console.log(mouseX.value, mouseY.value);

    // 数据缓存
    const data = useLocalStorage("info", { name: "张三", age: 17 });

    const changeData = () => (data.value = "哈哈哈");

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData,
    };
    // 阅读性差点
    // return {
    //   ...useCounter(),
    // };
  },
};
</script>

<style scoped>
.container {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.mouse {
  position: fixed;
  left: 30px;
  bottom: 30px;
}
</style>