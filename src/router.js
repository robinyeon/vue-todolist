import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
