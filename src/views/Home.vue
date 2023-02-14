<template>
  <div class="container-fluid">
    <AdminController />
    <section>
      <div class="row">
        <div class="col">
          <div><strong> Kullanıcı Bilgileri </strong></div>
          <div class="">
            <p class="m-0">isim: {{ userData.name }}</p>
          </div>
          <div class="">
            <p class="m-0">email: {{ userData.email }}</p>
          </div>
        </div>
        <div class="col">
          <AddToDo />
        </div>
      </div>
    </section>
    <section>
      <DisplayTodos />
    </section>
  </div>
</template>
<script>
import AdminController from "@/components/AdminController.vue";
import AddToDo from "@/components/AddToDo.vue";
import DisplayTodos from "@/components/DisplayTodos.vue";
import firebase from "../firebase/firebase";
export default {
  name: "Home",
  components: {
    AdminController,
    AddToDo,
    DisplayTodos,
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
    await this.GET_USER();
    await this.GET_TODOS();
  },
  methods: {
    async GET_USER() {
      setTimeout(async () => {
        let data = await this.$store.getters.getUserInfo;
        this.userData = data;
        //   console.log(data);
      }, 3000);
    },
    async GET_TODOS() {
      await this.$store.dispatch("GET_USER_TODOS");
    },
  },
};
</script>
<style>
</style>