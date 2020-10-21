<template>
  <div class="history">
    <v-card
      class="border"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("opt.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("opt.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div class="ColDisplay border">
      <EditOptDetails class="ColDisplayElem mr-2" />
      <Map class="ColDisplayElem ml-2" />
    </div>
    <runOptimization class="border" />
  </div>
</template>

<script>
// @ is an alias to /src
// import Simulation from "../models/simulation.model"
import runOptimization from '../components/RunOptimization.vue'
import Map from '../components/Map.vue'
import EditOptDetails from '../components/EditOptDetails.vue'

export default {
  name: 'Optimize',
  components: {
    Map,
    runOptimization,
    EditOptDetails
  },
  data: () => ({
    results: []
  })
}
</script>
