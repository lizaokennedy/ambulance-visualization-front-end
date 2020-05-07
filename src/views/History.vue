<template>
  <div class="history">
    <v-card class="history-list" outlined>
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
      <v-list>
        <v-list-item v-for="(item, i) in results" :key="i">
          <v-list-item-content>
            <HistoryItem
              :id="item.id"
              :startTime="item.startTime"
              :endTime="item.endTime"
              :year="item.year"
              :status="item.status"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HistoryItem from "../components/HistoryItem.vue";
import DataService from "../services/data.service";
// import Simulation from "../models/simulation.model";

export default {
  name: "History",
  components: {
    HistoryItem
  },
  data: () => ({
    dataService: DataService,
    results: []
  }),
  mounted() {
    DataService.fetchSimulations().then(response => {
      this.results = response;
    });
  }
};
</script>
