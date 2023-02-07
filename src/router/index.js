import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "../firebase/firebase";
import SignUp from "../views/SignUp.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];
const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: "history",
  // mode:"hash"
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const data = firebase.firebase;
  const user = data.auth().currentUser;
  if (requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});

export default router;