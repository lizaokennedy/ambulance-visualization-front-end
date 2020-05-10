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
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import Chart from '../components/RandomChart.vue'
import DataService from '../services/data.service'

export default {
  name: 'Analysis',
  components: {
  },
  data: () => ({
    reponsesPerWeek: []
  }),
  mounted () {
    DataService.getResponsesPerWeek().then(response => {
      this.reponsesPerWeek = response
    })
  }
}
</script>
