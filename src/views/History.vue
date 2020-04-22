<template>
  <div class="history">
    <v-card class="history-list" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            History of Simuations
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            All past Simuations with links to their results
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
  // asyncComputed: {
  //   async pastSimulation() {
  //     let simulations = [];
  //     const sims = await DataService.fetchSimulations().then(sims => {
  //       if (sims !== undefined) {
  //         // console.log(sims[0].id);
  //         simulations = sims;
  //       } else {
  //         const s = new Simulation(0, 2000, 0, 0, "Done");
  //         simulations = s;
  //       }
  //     });
  //     console.log(sims);
  //     console.log(simulations[0]);
  //     return simulations;
  //   }
  // }
};
</script>
