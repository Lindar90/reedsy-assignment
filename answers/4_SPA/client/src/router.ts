import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/books",
    name: "Books",
    component: () => import("./BooksList/BooksListPage.vue"),
  },

  {
    path: "/books/:id",
    name: "BookDetails",
    component: () => import("./BookDetails/BookDetailsPage.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
