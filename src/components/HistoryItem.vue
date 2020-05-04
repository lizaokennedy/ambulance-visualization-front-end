<template>
  <v-card outlined>
    <v-list-item two-line>
      <v-list-item-content>
        <v-container>
          <v-row>
            <v-col>
              <v-list-item-title
                class="headline mb-1 display-1 font-weight-thin"
              >
                Simulation {{ id }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ startTime }} - {{ endTime }}
              </v-list-item-subtitle>
            </v-col>
            <v-col>
              <v-list-item-title
                class="headline mb-1 display-1 font-weight-thin"
              >
                {{ year }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ status }}
              </v-list-item-subtitle>
            </v-col>
            <v-col>
              <router-link :to="analysisLink">
                <v-icon class="icon" color="accent">mdi-chart-line</v-icon>
              </router-link>
              <v-list-item-subtitle class="font-weight-light md-2">
                See Simulation results
              </v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "../i18n";

export default Vue.extend({
  name: "HistoryItem",
  components: {},
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    startTime: {
      type: Number,
      default: 0,
      required: true
    },
    endTime: {
      type: Number,
      default: 0,
      required: true
    },
    year: {
      type: Number,
      default: 0,
      required: true
    },
    status: {
      type: String,
      default: "None Found",
      required: true
    }
  },
  data: () => ({
    analysisLink: "/" + i18n.locale + "/analysis"
  })
});
</script>
