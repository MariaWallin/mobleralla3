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
      path: "/vardagsrum",
      name: "vardagsrum",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "vardagsrum" */ "./views/Vardagsrum.vue")
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
<<<<<<< HEAD
      path: "/köksinredning",
      name: "köksinredning",
=======
      path: "/kok",
      name: "kok",
>>>>>>> master
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
<<<<<<< HEAD
        import(/* webpackChunkName: "köksinredning" */ "./views/Köksinredning.vue")
    },
=======
        import(/* webpackChunkName: "kok" */ "./views/Kok.vue")
    }
>>>>>>> master

  ]
});
