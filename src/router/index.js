import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import List from "./views/List.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/list",
    component: List,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
