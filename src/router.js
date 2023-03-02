import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import List from "./components/List.vue";

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
