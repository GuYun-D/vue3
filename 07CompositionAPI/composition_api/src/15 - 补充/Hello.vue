<script>
import { h } from "@vue/runtime-core";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "Hello World组件"),
      // 展示插槽
      this.$slots.default
        ? this.$slots.default({
          name: "牛逼格拉斯"
        })
        : h("mark", null, "我是插槽的默认的值"),
    ]);
  },
};
</script>

<style scoped>
</style>