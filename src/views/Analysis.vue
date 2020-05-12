<template>
  <div
    class="analysis"
    fill-height
  >
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
    </v-card>
    <div class="d-flex flex-column flex-wrap mx-8">
      <div class=" d-flex flex-wrap my-2">
        <InfoCard
          title="Total Responses"
          :data="numResponses"
          class="flex-grow-1"
          :color="color1"
        />
        <InfoCard
          title="Persentage Transfered to Hospitals"
          :data="numTransfers"
          class="flex-grow-1 mx-2"
          :color="color2"
        />
        <InfoCard
          title="Average Response Time"
          :data="numResponses"
          class="flex-grow-1"
          :color="color3"
        />
      </div>
      <v-card
        class="flex-grow-1 mt-2"
        max-height="15em"
      >
        <v-card-subtitle class="mb-1 headline pa-1 pt-2 font-weight-light text-center">
          Number of responses per week
        </v-card-subtitle>
        <LineChart
          v-if="reponsesPerWeek.length > 0"
          :chart-data="reponsesPerWeek"
          :options="LineChartOptions"
          label="Responses Per Week"
          height="120%"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from '../components/LineChart.vue'
import InfoCard from '../components/InfoCard.vue'
import DataService from '../services/data.service'

export default {
  name: 'Analysis',
  components: {
    LineChart,
    InfoCard
  },
  data: () => ({
    reponsesPerWeek: [],
    numResponses: 0,
    numTransfers: 0,
    LineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scaleFontColor: 'secondary',
      legend: {
        display: false,
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
    },
    DonutChartOptions: {
      responsive: true,
      maintainAspectRatio: true
    },
    color1: 'pinkText',
    color2: 'mintText',
    color3: 'coralText'
  }),
  async beforeCreate () {
    const numresponses = await DataService.getTotalResponses().then(
      response => {
        return response
      }
    )
    const responses = await DataService.getResponsesPerWeek().then(response => {
      return response
    })
    const numtransfers = await DataService.getTotalTransfers().then(response => {
      return response
    })
    this.numTransfers = Math.round((numtransfers / numresponses) * 100) + '%'
    this.numResponses = numresponses
    this.reponsesPerWeek = responses
  }
}
</script>
