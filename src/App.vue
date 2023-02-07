<template>
  <div id="app bg-warning">
      <Header />
      <router-view />
      <Footer />
  </div>
</template>
 
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {},
  methods: {},
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
