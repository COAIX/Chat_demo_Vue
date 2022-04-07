import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import axios from 'axios';
import VueCookies from "vue-cookies";
import VueRouter from "vue-router";

// import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.use(VueRouter);

Vue.config.productionTip = false

axios.defaults.withCredentials = true

//创建vm
new Vue({
    store,
    router,
	el:'#app',
	render: h => h(App),
    beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
