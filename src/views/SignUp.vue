<template>
  <div class="container text-center text-dark pt-5 mt-5 bg-primary">
    <form
      @submit.prevent="SIGN_UP"
      class="loginForm text-center container col-md-6 mt-5 pt-5"
    >
      <div class="login mt-3">
        <input
          class="form-control"
          type="text"
          placeholder="Your Name"
          v-model="name"
        />
      </div>
      <div class="login mt-2">
        <input
          class="form-control"
          type="email"
          placeholder="E-Mail Address"
          v-model="email"
        />
      </div>
      <div class="login mt-2">
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <button class="btn btn-danger mt-3 mb-5 loginbtn" type="submit">
        <i class="fas fa-sign-in-alt"></i>
        Üye Ol
      </button>
    </form>
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
      name: "",
      error: "",
    };
  },
  methods: {
    async SIGN_UP() {
      if (this.email == "" || this.password == "" || this.name == "") {
        this.showAlert("danger", "Fill The Blanks");
      } else {
        try {
          var data = firebase.firebase;
          await data
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          router.replace({ name: "Home" });
        } catch (err) {
          this.showAlert("danger", "ERROR ON THE SIGN-UP");
        }
      }
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