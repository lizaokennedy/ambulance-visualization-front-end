<script>
import { Bar } from 'vue-chartjs-typescript'

export default {
  extends: Bar,
  props: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [0, 9]
        },
        {
          label: 'Data two',
          backgroundColor: '#f87979',
          data: [40, 20]
        },
        {
          label: 'Data three',
          backgroundColor: '#f87979',
          data: [60, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style></style>
