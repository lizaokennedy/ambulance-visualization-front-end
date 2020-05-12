<template>
  <v-list-item two-line>
    <v-list-item-content>
      <v-container>
        <v-row>
          <v-col>
            <v-list-item-title
              class="headline font-weight-thin"
            >
              {{ $t("history.simulation") }} {{ id }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("history.runningTime", {hours: hours, minutes: minutes}) }}
            </v-list-item-subtitle>
          </v-col>
          <v-col>
            <v-list-item-title
              class="headline  display-1 font-weight-thin"
            >
              {{ year }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("history.status") }}: {{ status }}
            </v-list-item-subtitle>
          </v-col>
          <v-col>
            <router-link
              class="link"
              :to="analysisLink"
            >
              <v-icon
                class="icon"
                color="accent"
              >
                mdi-chart-line
              </v-icon>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ $t("history.seeAnalysis") }}
              </v-list-item-subtitle>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'

export default Vue.extend({
  name: 'HistoryItem',
  components: {},
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    startTime: {
      type: Number,
      default: 3,
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
      default: 'None Found',
      required: true
    },
    hours: {
      type: Number,
      default: 0,
      required: true
    },
    minutes: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data: () => ({
    analysisLink: '/' + i18n.locale + '/analysis'
  }),
  computed: {
  }
})
</script>
