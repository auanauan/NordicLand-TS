import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import HomeViews from "../../views/HomeView.vue";
import ProductsView from "../../views/ProductsView.vue";
import AboutView from "../../views/AboutView.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: HomeViews },
  { path: "/products", name: "Products", component: ProductsView },
  { path: "/about", name: "About", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
