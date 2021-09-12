<template>
  <div>
    <!-- <button @click="btnClick">按钮</button> -->
    <!-- <input type="text" :value="modelValue" @input="btnClick"> -->
    <!-- 绑定到props的数据。这是不被允许的 -->
    <!-- <input type="text" v-model="modelValue"> -->
    <input type="text" v-model="value" />
    <input type="text" v-model="title" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue", "update:title"],
  props: {
    modelValue: String,
    title: String,
  },

  computed: {
    value: {
      get() {
        return this.modelValue;
      },

      set(newValue) {
        this.$emit("update:modelValue", newValue);
      },
    },

    title: {
      get() {
        return this.title;
      },

      set(title) {
        this.$emit("update:title", title);
      },
    },
  },

  methods: {
    btnClick(event) {
      console.log("打印了");
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>