import { createRouter, createWebHistory } from "vue-router";
import allWidgets from "../../json/config";

const staticRoutes = [];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes,
});


function addDynamicRoutes(config) {

    Object.values(config).forEach((route) => {
      const dynamicRoute = {

        path: route.path,
        name: route.name,
        component: () => import(`../components/MasterLayout.vue`),
        meta: route.meta || {},
      };

      router.addRoute(dynamicRoute);
    });

}

addDynamicRoutes(allWidgets);


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
