import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

{
      path: "/sovrum",
      name: "sovrum",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "sovrum" */ "./views/Sovrum.vue")
    },
{
      path: "/vardagsrum",
      name: "vardagsrum",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "vardagsrum" */ "./views/Vardagsrum.vue")
      },
{
      path: "/kok",
      name: "kok",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "kok" */ "./views/Kok.vue")
    },
  ]
});
