import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; // el  @ es un pequeño truco que nos da webpack y vue para hacer referencia de manera relativa al directorio src

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
