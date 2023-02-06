import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUpView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
