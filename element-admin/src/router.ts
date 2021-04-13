import { createRouter, createWebHistory } from "vue-router";
import ListArticle from "./views/ListArticle.vue";
import CreateArticle from "./views/CreateArticle.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/articles/index",
    },
    {
      path: "/articles/index",
      name: "list-article",
      component: ListArticle,
    },
    {
      path: "/articles/create",
      name: "create-article",
      component: CreateArticle,
    },
  ],
});
