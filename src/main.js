import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/main.scss";

// Database properties
Vue.prototype.$stays = 'staysDev';
if (process.env.NODE_ENV === 'production') {
    Vue.prototype.$stays = 'stays';
}


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
