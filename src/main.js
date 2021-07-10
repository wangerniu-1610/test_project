import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//全局處理,將端口寫入main中，修改端口就在这里修改
Vue.prototype.$http = axios;//將axios賦給了vue的原型
Vue.prototype.$echarts = echarts;
axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)//方法,创建元素的 H是creatElement
}).$mount('#app')
