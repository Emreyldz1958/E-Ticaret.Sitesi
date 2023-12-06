const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Todo.vue") },
      { path: "/sepet", component: () => import("src/pages/sepetim.vue") },
      { path: "/page1", component: () => import("src/pages/yenı.vue") },
      { path: "/page3", component: () => import("src/pages/sepetim.vue") },
      { path: "/Login", component: () => import("src/pages/login.vue") },
      { path: "/details", component: () => import("src/pages/urun.vue") },
      { path: "/yorumlar", component: () => import("src/pages/destek.vue") },
      {
        path: "/urunler",
        component: () => import("src/pages/urunler.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
