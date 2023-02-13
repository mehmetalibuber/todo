<template>
  <div class="container">
    <AdminController />
  </div>
</template>
<script>
import AdminController from "@/components/AdminController.vue";
import firebase from "../firebase/firebase";
export default {
  name: "Home",
  components: {
    AdminController,
  },
  data() {
    return {
      uid: "",
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
    await this.VERI_CEK();
  },
  methods: {
    async VERI_CEK() {
      console.log(this.$store.getters.getUserInfo);
    },
  },
};
</script>
<style>
</style>