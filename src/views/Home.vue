<template>
  <div class="container">
    <AdminController />
    <section>
      <div class="row">
        <div class="col">
          <div><strong> Kullanıcı Bilgileri </strong></div>
          <div class="m-0">
            <p class="m-0">isim: {{ userData.name }}</p>
          </div>
          <div class="m-0">
            <p class="m-0">email: {{ userData.email }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <AddToDo />
    </section>
  </div>
</template>
<script>
import AdminController from "@/components/AdminController.vue";
import AddToDo from "@/components/AddToDo.vue";
import firebase from "../firebase/firebase";
export default {
  name: "Home",
  components: {
    AdminController,
    AddToDo,
  },
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
    await this.VERI_CEK();
  },
  methods: {
    async VERI_CEK() {
      setTimeout(async () => {
        let data = await this.$store.getters.getUserInfo;
        this.userData = data;
        console.log(data);
      }, 3000);
    },
  },
};
</script>
<style>
</style>