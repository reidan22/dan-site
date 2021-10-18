import Vue from "vue";
import VueRouter from "vue-router";
import TheMain from "@/views/TheMain.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheMain",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
