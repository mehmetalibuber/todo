<template>
  <div class="container text-center text-dark pt-5 mt-5 bg-primary">
    <form class="loginForm text-center container col-md-6 mt-5 pt-5">
      <div class="login mt-2">
        <input
          class="form-control"
          type="email"
          placeholder="E-Mail Adresi"
          v-model="email"
        />
      </div>
      <div class="login mt-2">
        <input
          class="form-control"
          type="password"
          placeholder="Şifre"
          v-model="password"
        />
      </div>
    </form>

    <div class="d-flex justify-content-center">
      <button @click="SIGN_IN" class="btn btn-danger my-5 mx-2">
        <i class="fas fa-sign-in-alt"></i>
        Giriş Yap
      </button>
      <button
        @click="GO_SIGN_UP"
        class="btn btn-warning my-5 mx-2"
        type="submit"
      >
        <i class="fas fa-user"></i>
        Üye Ol
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/firebase";
import router from "../router/index";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async SIGN_IN() {
      if (this.email == "" || this.password == "") {
        this.showAlert("danger", "Fill The Blanks");
      } else {
        try {
          var data = firebase.firebase;
          await data
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          //await this.$store.dispatch("GET_USER_DATA");
          router.replace({ name: "Home" });
        } catch (err) {
          this.showAlert("danger", "ERROR ON THE SIGN-IN");
        }
      }
    },   
    GO_SIGN_UP() {
      router.replace({ name: "SignUp" });
    },
    showAlert(value, message) {
      const form = document.querySelector("form");
      const alertDiv = document.createElement("div");
      alertDiv.style.display = "flex";
      alertDiv.style.position = "absolute";
      const a = document.createElement("a");
      a.className = `alert alert-${value}`;
      a.innerText = message;
      alertDiv.appendChild(a);
      form.appendChild(alertDiv);
      setTimeout(() => {
        alertDiv.remove();
      }, 2000);
    },
  },
};
</script>
<style>
</style>