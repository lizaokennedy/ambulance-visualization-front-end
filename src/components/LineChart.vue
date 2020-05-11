<script>
import { Line } from 'vue-chartjs-typescript'

export default {
  extends: Line,
  props: {
    label: {
      type: String,
      default: ''
    },
    chartData: {
      type: Array,
      default: null

    },
    options: {
      type: Object,
      default: null

    }
  },
  mounted () {
    const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
    const totals = this.chartData
    this.renderChart(
      {
        labels: weeks,
        datasets: [
          {
            label: this.label,
            data: totals
          }
        ]
      },
      this.options
    )
  }
}
</script>

<style></style>
