import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';


//for charts
import "chart.js";
import "hchs-vue-charts";

Vue.use(window.VueCharts);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')