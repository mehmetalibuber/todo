<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>ULTOF ONLINE TO DO WEB APP</h1>
      <p>
        To Do Web App uygulamamız geliştirme aşamasındadır! Bize ulaşmak için iletişim butonunu kullanabilirsiniz.
         İlginiz için teşekkür ederiz.
      </p>
      <a class="btn btn-danger border-0" href="https://ultof.com" title="ultof web sitesi">İLETİŞİME GEÇ</a>
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
