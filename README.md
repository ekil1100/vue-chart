# vue-chart

Vue plugin which import chart.js as a vue component.

## Install

```bash
npm i @likelz/vue-chart
```

## Usage

```js
import vChart from '@likelz/vue-chart';

Vue.use(vChart);

// or with optional tag name
Vue.use(vChart, {
  tagName: 'MyTagName',
});
```

```js
<v-chart
  width="400"
  height="400"
  type="bar"
  :data="data"
  :options="options"
  :chart.sync="chart"
  :ctx.sync="ctx"
/>
```
