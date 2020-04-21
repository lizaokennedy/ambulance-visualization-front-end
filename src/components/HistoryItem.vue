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
                {{ title }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ day }}
              </v-list-item-subtitle>
            </v-col>
            <v-col>
              <v-list-item-title
                class="headline mb-1 display-1 font-weight-thin"
              >
                {{ year }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ duration }}
              </v-list-item-subtitle>
            </v-col>
            <v-col>
              <router-link :to="analysisLink">
                <v-icon>mdi-chart-line</v-icon>
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
    title: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    }
  },
  data: () => ({
    analysisLink: "/" + i18n.locale + "/analysis"
  })
});
</script>
