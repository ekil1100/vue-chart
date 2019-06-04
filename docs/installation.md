# Installation

## Direct Download / CDN

https://unpkg.com/test-vue-plugin/dist/test-vue-plugin 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/test-vue-plugin@{{ $version }}/dist/test-vue-plugin.js
 
Include test-vue-plugin after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/test-vue-plugin/dist/test-vue-plugin.js"></script>
```

## NPM

```sh
$ npm install test-vue-plugin
```

## Yarn

```sh
$ yarn add test-vue-plugin
```

When used with a module system, you must explicitly install the `test-vue-plugin` via `Vue.use()`:

```javascript
import Vue from 'vue'
import test-vue-plugin from 'test-vue-plugin'

Vue.use(test-vue-plugin)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `test-vue-plugin` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//test-vue-plugin.git node_modules/test-vue-plugin
$ cd node_modules/test-vue-plugin
$ npm install
$ npm run build
```

