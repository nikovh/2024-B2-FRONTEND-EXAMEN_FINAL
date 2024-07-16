import { createWebHistory, createRouter } from "vue-router";
import Calc from "@/views/calc.vue"
import Form from "@/views/form.vue"

const routes = [
  {
    path: "/",
    name: "calc",
    component: Calc,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;