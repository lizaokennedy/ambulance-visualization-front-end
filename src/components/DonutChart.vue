<script>
import { Doughnut } from 'vue-chartjs-typescript'

export default {
  extends: Doughnut,
  props: {
    label1: {
      type: String,
      default: ''
    },
    label2: {
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
  data: () => ({
    gradient: ''
  }),
  computed: {},
  mounted () {
    // const totals = this.chartData
    this.renderChart(
      {
        labels: [this.label1, this.label2],
        datasets: [
          {
            data: [30, 50],
            borderColor: ['#B53055', '#68B0AB'],
            backgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(104,176,171,0.4)']
          }
        ]
      },
      this.options
    )
  } // computed properties
}
</script>

<style></style>

// <div class="d-flex">
//         <v-card
//           class="mx-2 mt-2 flex-grow-1"
//           max-height="400"
//           max-width="350"
//           min-height="200"
//         >
//           <v-card-title class="mb-1 font-weight-thin">
//             Total transfers
//           </v-card-title>
//           <DonutChart
//             v-if="reponsesPerWeek.length > 0"
//             :chart-data="reponsesPerWeek"
//             label1="Transfered"
//             label2="Not Transfered"
//             :options="DonutChartOptions"
//             height="100%"
//             width="100%"
//           />
//         </v-card>
