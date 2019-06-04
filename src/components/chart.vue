<template>
  <canvas :width="width" :height="height" ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js';
export default {
  props: ['chart', 'ctx', 'height', 'width', 'type', 'data', 'options'],
  data() {
    return {
      chartInstant: this.chart,
      ctxInstant: this.ctx,
    };
  },
  watch: {
    ctxInstant(n) {
      this.$emit('update:ctx', n);
    },
    chartInstant(n) {
      this.$emit('update:chart', n);
    },
  },
  mounted() {
    this.ctxInstant = this.$refs.chart.getContext('2d');
    this.chartInstant = new Chart(this.ctxInstant, {
      type: this.type,
      data: this.data,
      options: this.options,
    });
  },
};
</script>
