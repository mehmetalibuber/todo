import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import router from "./router/index";
import firebase from "./firebase/firebase";
import VueEditor from "vue2-editor";
Vue.use(VueEditor);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let app;
let data = firebase.firebase;
data.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});