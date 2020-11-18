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
              {{ $t("historyOpt.optimization") }} {{ id }}
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("historyOpt.status") }}: {{ status }}
            </v-list-item-subtitle>
          </v-col>

          <v-col class="centered pa-0">
            <v-list-item-subtitle class="font-weight-light md-2">
              {{ $t("historyOpt.responseTime") }}
            </v-list-item-subtitle>
            <v-list-item-title class="font-weight-light md-2">
              {{ responseTime }}
            </v-list-item-title>
          </v-col>
          <v-col class="centered pa-0">
            <router-link
              class="link"
              :to="{name: 'Details', params: {id: id }}"
            >
              <v-icon
                class="icon pt-2 mb-0"
                color="accent"
              >
                mdi-chart-line
              </v-icon>
              <v-list-item-subtitle class="font-weight-light md-2">
                {{ $t("historyOpt.seeAnalysis") }}
              </v-list-item-subtitle>
            </router-link>
          </v-col>
          <v-col class="centered pa-0">
            <v-btn
              color="accent"
              @click="removeSimuation()"
            >
              Delete Optimization
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
  name: 'OptimizationItem',
  components: {},
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    responseTime: {
      type: Number,
      default: 3,
      required: true
    },
    status: {
      type: String,
      default: 'None Found',
      required: true
    }
  },
  data: () => ({
    analysisLink: '/' + i18n.locale + '/details',
    removed: false
  }),
  methods: {
    removeSimuation () {
      DataService.removeOptimization(this.id.toString()).then(response => {
        this.removed = response
        console.log('removed')
      })
      this.$router.go(0)
    }
  }
})
</script>
