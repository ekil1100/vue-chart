// plugin.js
import Plugin from '/src/components/plugin.vue';

export default {
  install(Vue) {
    // Add or modify global methods or properties.
    Vue.yourMethod = value => value;
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    Vue.component('plugin', Plugin);
    // Add `Vue.mixin()` to inject options to all components.
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created() {
        console.log('Hello from created hook!');
      },
    });
    // Add Vue instance methods by attaching them to Vue.prototype.
    Vue.property.$myProperty = 'This is a Vue instance property.';
  },
};
