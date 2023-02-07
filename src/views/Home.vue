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
      userInfos: {},
    };
  },
  async created() {
    let data = firebase.firebase;
    data.auth().onAuthStateChanged(async (user) => {
      let uid = user.uid;
      this.uid = uid;
      this.$store.state.userUid = this.uid;
      await this.$store.dispatch("GET_USER_DATA", uid);
    });
    let d = await this.$store.getters.getUserInfo;
    this.userInfos = d;
    console.log(this.userInfos + "user infos");

    console.log(this.$store.getters.getUserInfo);
  },
  methods: {},
};
</script>
<style>
</style>