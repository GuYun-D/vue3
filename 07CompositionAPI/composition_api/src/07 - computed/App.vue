<template>
  <div>
    <div>
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
    </div>

    <div>{{ fullName }}</div>

    <button @click="changeName">修改</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let firstName = ref("张");
    let lastName = ref("小四");

    // getter
    // computed返回值是一个ref对象
    // let fullName = computed(() => {
    //   return firstName.value + lastName.value;
    // });

    const changeName = () => {
      firstName.value = "王";
    };

    // getter，setter
    let fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set: (newValue) => {
        const names = newValue.split(" ");
        firstName.value = names[0];
      },
    });

    return {
      firstName,
      lastName,
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped>
</style>