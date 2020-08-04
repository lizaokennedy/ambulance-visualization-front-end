<template>
  <div
    class="analysis"
    fill-height
  >
    <v-card
      class="border"
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
          :title="$t('analysis.data.tResponses')"
          :data="numResponses"
          class="flex-grow-1"
          :color="color1"
        />
        <InfoCard
          :title="$t('analysis.data.ptransfers')"
          :data="avgDist + ' km'"
          class="flex-grow-1 mx-2"
          :color="color2"
        />
        <InfoCard
          :title="$t('analysis.data.aResponseTime')"
          :data="getAvgResponseTime()"
          class="flex-grow-1"
          :color="color3"
        />
      </div>
      <!-- <v-card
        class="flex-grow-1 mt-2"
        max-height="15em"
      >
        <v-card-subtitle class="mb-1 headline pa-1 pt-2 font-weight-light text-center">
          {{ $t('analysis.data.RPerWeek') }}
        </v-card-subtitle>
        <LineChart
          v-if="reponsesPerWeek.length > 0"
          :chart-data="reponsesPerWeek"
          :options="LineChartOptions"
          label="Responses Per Week"
          height="120%"
        />
      </v-card> -->
      <div class="ColDisplay">
        <Heatmap class="ColDisplayElem mr-2" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import LineChart from '../components/LineChart.vue'
import InfoCard from '../components/InfoCard.vue'
import DataService from '../services/data.service'
import Heatmap from '../components/Heatmap.vue'

export default {
  name: 'Analysis',
  components: {
    // LineChart,
    InfoCard,
    Heatmap
  },
  data: () => ({
    reponsesPerWeek: [],
    numResponses: 0,
    numTransfers: 0,
    avgResponseTime: 0,
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
    const simID = this.$route.params.id
    const numresponses = await DataService.getTotalResponses(simID).then(
      response => {
        return response
      }
    )
    // const responses = await DataService.getResponsesPerWeek().then(response => {
    //   return response
    // })
    const avgDist = await DataService.getAvgDistance(simID).then(response => {
      return response
    })
    const avgResTime = await DataService.getAvgResponseTime(simID).then(response => {
      return response
    })

    this.avgResponseTime = parseFloat(avgResTime).toFixed(3)
    this.avgDist = parseFloat(avgDist).toFixed(2)
    this.numResponses = numresponses
    // this.reponsesPerWeek = responses
  },
  methods: {
    getAvgResponseTime () {
      const d = this.avgResponseTime * 60
      const h = Math.floor(d / 3600)
      const m = Math.floor(d % 3600 / 60)
      const s = Math.floor(d % 3600 % 60)

      const hDisplay = h > 0 ? h + 'h ' : ''
      const mDisplay = m > 0 ? m + 'm ' : ''
      const sDisplay = s > 0 ? s + 's ' : ''
      return hDisplay + mDisplay + sDisplay
    }
  }
}
</script>
