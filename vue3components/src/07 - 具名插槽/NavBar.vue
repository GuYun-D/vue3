<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

    <!-- 这里虽然没有显式的声明插槽的名字，但是隐式的有一个名字叫做default -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.left,
.right {
  width: 80px;
  background-color: sandybrown;
}

.left,
.right,
.center {
  height: 40px;
}

.center {
  flex: 1;
  background-color: skyblue;
}
</style>