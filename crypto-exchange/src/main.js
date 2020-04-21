import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; // el  @ es un pequeño truco que nos da webpack y vue para hacer referencia de manera relativa al directorio src

import routes from "@/routes";

Vue.config.productionTip = false;

new Vue({
  router: routes,
  render: (h) => h(App),
}).$mount("#app");
