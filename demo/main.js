import Vue from 'vue';
import App from './Demo.vue';
import plugin from '../dist/vue-chart.esm';

Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: h => h(App),
}).$mount('#app');
