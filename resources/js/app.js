import "./utils/bootstrap";

import Vue from "vue";
import App from "./pages/AppPage.vue";
import Login from "./pages/LoginPage.vue";
import router from "./router";

Vue.config.productionTip = false;

//  Регистрация компонентов
Vue.component("app-page", App);
Vue.component("login-page", Login);

new Vue({
    router,
    el: "#app",
});
