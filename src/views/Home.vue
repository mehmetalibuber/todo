<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>ULTOF ONLINE TO DO WEB APP</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, vero
        ullam! Recusandae consequuntur vero laudantium repudiandae dicta
        quisquam explicabo accusamus vitae eum iusto soluta ea minima, ipsum
        obcaecati eaque voluptatum?
      </p>
      <button class="btn">Keşfet</button>
    </div>
  </div>
</template>
<script>
import firebase from "../firebase/firebase";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      uid: "",
      userData: {},
    };
  },
  async created() {
    let data = firebase.firebase;
    data.auth().onAuthStateChanged(async (user) => {
      let uid = user.uid;
      this.uid = uid;
      this.$store.state.userUid = this.uid;
      await this.$store.dispatch("GET_USER_DATA");
    });
    await this.GET_USER();
    await this.GET_TODOS();
  },
  methods: {},
};
</script>
