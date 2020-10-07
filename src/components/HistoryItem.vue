<template>
  <v-list-item
    two-line
  >
    <v-list-item-content>
      <v-container class="pa-0">
        <v-row>
          <v-col class="centered pa-0">
            <v-list-item-title
              class="headline font-weight-thin"
            >
              {{ $t("history.simulation") }} {{ id }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("history.runningTime") + time() }}
            </v-list-item-subtitle>
          </v-col>

          <v-col class="centered pa-0">
            <v-list-item-title
              class="headline  display-1 font-weight-thin"
            >
              {{ year }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("history.status") }}: {{ status }}
            </v-list-item-subtitle>
          </v-col>
          <v-col class="centered pa-0">
            <router-link
              class="link"
              :to="{name: 'Analysis', params: {id: id }}"
            >
              <v-icon
                class="icon pt-2 mb-0"
                color="accent"
              >
                mdi-chart-line
              </v-icon>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ $t("history.seeAnalysis") }}
              </v-list-item-subtitle>
            </router-link>
          </v-col>
          <v-col class="centered pa-0">
            <v-btn
              color="accent"
              @click="removeSimuation()"
            >
              Delete Simulation
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '../i18n'
import DataService from '../services/data.service'

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
    }
  },
  data: () => ({
    analysisLink: '/' + i18n.locale + '/analysis',
    removed: false
  }),
  methods: {
    hours () {
      let timeTaken = (this.endTime - this.startTime) / 60
      if (timeTaken >= 60) {
        let hours = 0
        while (timeTaken >= 60) {
          hours++
          timeTaken = timeTaken - 60
        }
        return (hours)
      } else {
        return 0
      }
    },
    minutes () {
      let timeTaken = (this.endTime - this.startTime) / 60
      if (timeTaken >= 60) {
        while (timeTaken >= 60) {
          timeTaken = timeTaken - 60
        }
        return (Math.round(timeTaken))
      } else {
        return (Math.round(timeTaken))
      }
    },
    removeSimuation () {
      DataService.removeSimulation(this.id.toString()).then(response => {
        this.removed = response
        console.log('removed')
      })
      this.$router.go(0)
    },
    time () {
      const d = (this.endTime - this.startTime)
      const h = Math.floor(d / 3600)
      const m = Math.floor(d % 3600 / 60)
      const s = Math.floor(d % 3600 % 60)

      const hDisplay = h > 0 ? h + 'h ' : ''
      const mDisplay = m > 0 ? m + 'm ' : ''
      const sDisplay = s > 0 ? s + 's ' : ''
      return hDisplay + mDisplay + sDisplay
    }
  }
})
</script>
