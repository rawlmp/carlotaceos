import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Species from "./views/Species.vue";
import About from "./views/About.vue";
import Location from "./views/Location.vue";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Home",
      name: "home",
      component: Home
    },
    {
      path: "/Species",
      name: "Species",
      component: Species
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Location",
      name: "Location",
      component: Location
    },

  ],
  mode: 'history' // quitar # en la url
});
