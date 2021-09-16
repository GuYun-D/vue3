<script>
import { h } from "vue";
import Hello from "./Hello.vue";

export default {
  render() {
    // 传入插槽， 一个插槽
    return h(Hello, {}, {
      default: props => h("span", null, "app传到hello组件的内容：" + props.name)
    });
  },
};
</script>