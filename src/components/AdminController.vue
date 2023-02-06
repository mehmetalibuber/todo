<template>
  <div class="admin-controller">
    <div>
      Giriş
      <span class="text-danger" v-if="loggedIn"> Onaylandı </span>
      <span v-else>Hatası</span>
    </div>
    <div>
      <button class="btn btn-warning mt-1" @click="signOut">
        Sistemden Çıkış Yap
      </button>
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
        this.$router.replace({ name: "Home" });
        //console.log(data)
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.admin-controller {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 20px;
}
</style>