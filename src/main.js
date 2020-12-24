import Vue from "vue";
import App from "./App.vue";
import { db } from '@/firebaseDatabase';
import "./registerServiceWorker";
import router from "./router";
import "./assets/css/main.scss";

// Database properties
Vue.prototype.$stays = 'staysDev';
if (process.env.NODE_ENV === 'production') {
    Vue.prototype.$stays = 'stays';
}

// Audit function
Vue.prototype.$storeAudit = function(type, data) {

    const operationData = {
        type: type, // add, delete or update
        data: data // changed data
    }
    const collection = process.env.NODE_ENV === 'production' ? 'audit' : 'auditDev'; // set production or dev collection

    // Add new audit on DB
    db.collection(collection).add(operationData);
}


new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
