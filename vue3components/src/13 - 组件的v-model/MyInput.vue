<template>
  <div>
    <!-- <button @click="btnClick">按钮</button> -->
    <!-- <input type="text" :value="modelValue" @input="btnClick"> -->
    <!-- 绑定到props的数据。这是不被允许的 -->
    <!-- <input type="text" v-model="modelValue"> -->
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
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