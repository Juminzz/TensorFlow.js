/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pm25",
    name: "pm25",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pm25.vue"),
  },
  {
    path: "/corona",
    name: "corona",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/corona.vue"),
  },
  {
    path: "/papago",
    name: "papago",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/papago.vue"),
  },
  {
    path: "/crawling",
    name: "crawling",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/crawling.vue"),
  },
  {
    path: "/shorturl",
    name: "shorturl",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/shorturl.vue"),
  },
  {
    path: "/qrcode",
    name: "qrcode",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/qrcode.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
