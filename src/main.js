import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/1_settings.css";
import "./assets/css/2_generic.css";
import "./assets/css/3_objects.css";
import "./assets/css/4_atoms.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
