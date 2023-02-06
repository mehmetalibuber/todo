import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "../firebase/firebase";
import Login from "../views/Login.vue";
import Admin from "../views/Admin/Admin.vue";
import Home from "../views/Home.vue";
import BlogAdmin from "../views/Admin/blogAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blogAdmin",
    name: "blogAdmin",
    component: BlogAdmin,
    meta: {
      requiresAuth: true,
    },
  },
];
const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
  mode: "hash",
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
