<template>
  <div class="container text-center">
    <form
      @submit.prevent="pressed"
      class="loginForm text-center container col-md-6"
    >
      <img src="/assets/img/profil3.png" class="w-25 mt-5" alt="profile" />
      <div class="login mt-3">
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
      <div class="login mt-2">
        <input
          class="form-control"
          type="password"
          placeholder="Security Key"
          v-model="securityKey"
        />
      </div>
      <button class="btn btn-danger mt-3 mb-5 loginbtn" type="submit">
        <i class="fas fa-sign-in-alt"></i>
        Login
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
      securityKey: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      if (this.email == "" || this.password == "" || this.securityKey == "") {
        this.showAlert("danger", "Fill The Blanks");
      } else {
        const key = "mabcodes";
        const enteredKey = this.securityKey.trim();
        if (enteredKey === key) {
          try {
            var data = firebase.firebase;
            await data
              .auth()
              .signInWithEmailAndPassword(this.email, this.password);
            router.replace({ name: "Admin" });
          } catch (err) {
            this.showAlert(
              "danger",
              "There is no user record corresponding to this identifier"
            );
          }
        } else this.showAlert("danger", "Security Key Error");
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