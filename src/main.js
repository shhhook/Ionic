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
            import("@/components/Main.vue"),
            children: [
                {
                    path: "/",
                    redirect: "/tab1"
                },
                {
                    path: "/tab1",
                    name: "tab1",
                    components: {
                        tab1: () => import("@/components/Tab1.vue")
                    }
                },
                {
                    path: "/tab1/details",
                    name: "tab1-details",
                    components: {
                        tab1: () => import("@/components/Tab1Details.vue")
                    }
                },
                {
                    path: "/tab2",
                    name: "tab2",
                    components: {
                        tab2: () => import("@/components/Tab2.vue")
                    }
                },
                {
                    path: "/tab3",
                    name: "tab3",
                    components: {
                        tab3: () => import("@/components/Tab3.vue")
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
