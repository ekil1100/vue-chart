// plugin.js
import Chart from '../components/chart.vue';

let defaultOptions = {
  tagName: 'vChart',
};

export default {
  install(vue, options) {
    let opts = { ...defaultOptions, ...options };
    vue.component(opts.tagName, Chart);
  },
};
