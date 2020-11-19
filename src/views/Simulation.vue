<template>
  <div class="history">
    <v-card
      class="border"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("sim.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("sim.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div class="ColDisplay border">
      <EditDetails class="ColDisplayElem mr-2" />
      <Map class="ColDisplayElem ml-2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Simulation from "../models/simulation.model"
import Map from '../components/Map.vue'
import EditDetails from '../components/EditDetails.vue'

export default {
  name: 'Simulation',
  components: {
    Map,
    EditDetails
  },
  data: () => ({
    results: []
  })
}
</script>
