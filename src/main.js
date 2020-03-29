import Vue from "vue";
import App from "./App.vue";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import './styles/main.scss'

Vue.config.productionTip = false;

import {IonicVueRouter} from "@ionic/vue";

Vue.use(IonicVueRouter);
Vue.use(Ionic);

const router = new IonicVueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: () =>
            import("@/components/Films.vue"),
            children: [
                {
                    path: "/",
                    redirect: "/films"
                },
                {
                    path: "/films",
                    name: "Films",
                    components: {
                        tab1: () => import("@/components/Films.vue")
                    }
                }
            ]
        }
    ]
});
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
