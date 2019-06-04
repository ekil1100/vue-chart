# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


## HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/test-vue-plugin/dist/test-vue-plugin.js"></script>

<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```

## JavaScript

```javascript
// If using a module system (e.g. via Vue CLI), import Vue and test-vue-plugin and then call Vue.use(test-vue-plugin).
// import Vue from 'vue'
// import test-vue-plugin from 'test-vue-plugin'
// 
// Vue.use(test-vue-plugin)

// NOTE: here the example

// Now the app has started!
new Vue({ }).$mount('#app')
```

Output the following:

```html
<div id="#app">
  <!-- NOTE: here the outputs -->
</div>
```
