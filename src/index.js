import Chart from './components/chart.vue';

const version = '__VERSION__';

const defaultOptions = {
  tagName: 'vChart',
};

const install = (vue, options) => {
  let opts = { ...defaultOptions, ...options };
  vue.component(opts.tagName, Chart);
};

const plugin = {
  install,
  version,
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
