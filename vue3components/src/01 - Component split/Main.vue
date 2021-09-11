<template>
  <div>
    <h2 :class="$attrs.class" :id="$attrs.id">Banner</h2>
    <ul v-bind="$attrs">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>

    </ul>
  </div>
</template>

<script>

  export default {
    inheritAttrs: false,
    mounted(){
      console.log(this.$attrs);
    }
  }
</script>

<style scoped>

</style>