<template>
  <div class="analysis">
    <v-card
      class="history-list"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("analysis.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("analysis.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <LineChart
        v-if="reponsesPerWeek.length > 0"
        :chart-data="reponsesPerWeek"
        :options="chartOptions"
        label="Responses Per Week"
      />
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
      maintainAspectRation: false
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
