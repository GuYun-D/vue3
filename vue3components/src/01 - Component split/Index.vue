<template>
  <div>
    <h2>hufeddd</h2>
    <Header></Header>
    <Main class="why" id="cloud"></Main>
    <Footer id="footer" class="fooer"></Footer>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Main from "./Main.vue";
export default {
  components: {
    Footer,
    Header,
    Main
  }
};
</script>

<style scoped>
h2{
  color: bisque;
}
</style>