<script>
import { h } from "@vue/runtime-core";
export default {
  render() {
    return (
      <div>
        <h2>hello 你妹的</h2>
        {this.$slots.default ? this.$slots.default() : "你个吊毛，啥也没给我"}
      </div>
    );
  },
};
</script>