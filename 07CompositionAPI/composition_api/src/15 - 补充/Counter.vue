<script>
import { ref, h } from "vue";
export default {
  // setup计数器
  setup() {
    const counter = ref(0);
    return () => {
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数: ${counter.value}`),
        h(
          "button",
          {
            // 这里面h函数是可以取到
            onclick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onclick: () => counter.value--,
          },
          "-1"
        ),
      ]);
    };
  },

  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },

  // render() {
  //   return h("div", { class: "app" }, [
  //     h("h2", null, `当前计数: ${this.counter}`),
  //     h(
  //       "button",
  //       {
  //         // 这里面h函数是可以取到this的
  //         onclick: () => this.counter++,
  //       },
  //       "+1"
  //     ),
  //     h(
  //       "button",
  //       {
  //         onclick: () => this.counter--,
  //       },
  //       "-1"
  //     ),
  //   ]);
  // },
};
</script>