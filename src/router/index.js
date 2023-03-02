import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login";
import Register from "./views/Register";
import List from "./views/List";

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
