<template>
  <div class="history">
    <v-card
      class="history-list"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("history.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("history.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-list class="ma-7">
      <v-list-item
        v-for="(item, i) in results"
        :key="i"
      >
        <v-list-item-content>
          <HistoryItem
            :id="item.id"
            :start-time="item.startTime"
            :end-time="item.endTime"
            :year="item.year"
            :status="item.status"
            :time-taken="item.getTimeTaken()"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HistoryItem from '../components/HistoryItem.vue'
import DataService from '../services/data.service'
// import Simulation from "../models/simulation.model";

export default {
  name: 'History',
  components: {
    HistoryItem
  },
  data: () => ({
    dataService: DataService,
    results: []
  }),
  mounted () {
    DataService.fetchSimulations().then(response => {
      this.results = response
    })
  }
}
</script>
