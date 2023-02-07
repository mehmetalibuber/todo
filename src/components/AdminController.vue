<template>
  <div class="text-center text-dark">
    <span class="text-danger" v-if="loggedIn"> Giriş Yapıldı </span>
    <span v-else>Giriş Yapılmadı</span>
    <div>
      <button class="btn btn-warning mt-1" @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/firebase";

export default {
  created() {
    let data = firebase.firebase;
    data.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = firebase.firebase;
        await data.auth().signOut();
        this.$router.replace({ name: "SignUp" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>