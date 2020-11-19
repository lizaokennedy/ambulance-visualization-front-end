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
              {{ $t("details.depot.depotID") }} {{ id }}
            </v-list-item-title>
            <v-list-item-title class="font-weight-light md-2">
              <!-- <v-icon
                class="icon"
                color="primary"
              >
                mdi-ambulance
              </v-icon> -->
              {{ $t("details.depot.numAmbus") }} {{ ambus }}
            </v-list-item-title>
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
    lng: {
      type: Number,
      default: 18,
      required: true
    },
    lat: {
      type: Number,
      default: -33,
      required: true
    },
    ambus: {
      type: Number,
      default: 2,
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
