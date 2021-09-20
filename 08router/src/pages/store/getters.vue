<template>
  <div style="background: skyblue">
    <!-- 总价：{{ $store.getters.totalPrice }} -->
    总价2：{{ totalPrice }}
    <br />
    <!-- 打折后： {{ $store.getters.currentDiscount }} -->
    打折后2： {{ currentDiscount }}
    <br />
    只计算数量大于3的书籍总价：{{ $store.getters.coutThree(3) }}
  </div>
</template>

<script>
import { useGetters } from "../../hooks/useGetters和useState封装/useGetters";
export default {
  setup() {
    // 一个一个的取
    // const stroe = useStore();
    // const totalPrice = computed(() => stroe.getters.totalPrice);

    // 封装
    const stroeGetters = useGetters(['totalPrice', 'currentDiscount'])

    return {
      ...stroeGetters,
    };
  },
};
</script>

<style scoped>
</style>