<template>
  <div class="analysis">
    <v-card
      class="history-list"
      outlined
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("analysis.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("analysis.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="d-flex">
        <v-card
          class="ma-6 flex-column"
          color="primary"
          height="20rem"
          width="40rem"
        >
          <v-card-title class="mb-1 font-weight-thin whiteText">
            Number of responses per week
          </v-card-title>
          <LineChart
            v-if="reponsesPerWeek.length > 0"
            :chart-data="reponsesPerWeek"
            :options="chartOptions"
            label="Responses Per Week"
            :height="150"
          />
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from '../components/LineChart.vue'
import DataService from '../services/data.service'

export default {
  name: 'Analysis',
  components: {
    LineChart
  },
  data: () => ({
    reponsesPerWeek: [],
    chartOptions: {
      responsive: true,
      maintainAspectRation: false,
      scaleFontColor: 'secondary',
      legend: {
        labels: {
          // This more specific font property overrides the global property
          fontColor: '#AAAAAA'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: '#AAAAAA'
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontColor: '#AAAAAA'
            }
          }
        ]
      }
    }
  }),
  async beforeCreate () {
    const data = await DataService.getResponsesPerWeek().then(response => {
      return response
    })
    this.reponsesPerWeek = data
  }
}
</script>
