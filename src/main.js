import Vue from 'vue';
import App from './App.vue';
import vChart from './plugins/chart.js';

Vue.use(vChart);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
