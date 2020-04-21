<template>
  <div class="history">
    <v-card class="history-list"
outlined>
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
        <v-list-item v-for="(item, i) in history"
:key="i">
          <v-list-item-content>
            <HistoryItem
              :title="item.title"
              :day="item.day"
              :duration="item.duration"
              :year="item.year"
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

export default {
  name: "History",
  components: {
    HistoryItem
  },
  data: () => ({
    history: [
      {
        title: "A simulation",
        day: "15 April",
        duration: "39 mins",
        year: "2017"
      },
      {
        title: "A Second Simulation",
        day: "17 April",
        duration: "54 mins",
        year: "2019"
      }
    ]
  })
};
</script>
