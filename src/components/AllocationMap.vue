<template>
  <v-card>
    <v-card-title class="font-weight-thin md-2 pr-6 pb-0">
      {{ areaName }}
    </v-card-title>
    <v-list-item>
      <v-list-item-content
        height="100%"
        width="100%"
      >
        <div>
          <MglMap
            :access-token="accessToken"
            :map-style="mapStyle"
            :mapbox-gl="mapbox - gl"
            :center="coordinates"
            zoom="11.7"
            class="setSize font-weight-thin"
          >
            <MglMarker
              v-for="depot in depots"
              :key="depot.id"
              :coordinates="[depot.lat, depot.lng]"
              :draggable="draggable"
              color="#172A3A"
              @dragend="saveLongLat($event, depot)"
            >
              <MglPopup>
                <div>
                  <v-card-subtitle class="pa-2">
                    Depot ID: {{ depot.id }}
                  </v-card-subtitle>
                  <v-text-field
                    v-if="!optimization"
                    v-model="depot.ambulances"
                    disabled="true"
                    label="Ambulances"
                    :placeholder="optimization"
                    outlined
                    append-icon="mdi-ambulance"
                    color="accent"
                    class="pa-0 ma-0"
                  />
                </div>
              </MglPopup>
            </MglMarker>
          </MglMap>
          <v-spacer />
        </div>
      </v-list-item-content>
    </v-list-item>
    <DepotPopup />
  </v-card>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglPopup, MglMarker } from 'vue-mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'
import DepotPopup from '../components/NewDepotPopup.vue'

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup,
    DepotPopup
  },
  props: {
    optimization: {
      type: Boolean,
      required: false,
      default: false
    },
    depots: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      accessToken:
        'pk.eyJ1IjoibGl6YW9rZW5uZWR5IiwiYSI6ImNrY3Z0ZDB0cDA3aXcycW1zNW00Nmx2aTEifQ.-DZwZVyLVc1Z0m4U9KM_Pw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/lizaokennedy/ckcvtmhe90s9q1iqy33gxp0ld', // your map style
      areaName: 'Cape Town',
      coordinates: [18.4643, -33.80328]
    }
  },
  computed: {
    draggable () {
      console.log(this.$store.state.draggable)
      return this.$store.state.draggable
    },
    btnDisabled () {
      if (this.$store.state.running || this.$store.state.saving) {
        return true
      } else {
        return false
      }
    }
  },

  created () {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
    this.$store.state.depots = this.depots
  },
  methods: {
    saveLongLat (event, depot) {
      this.depots[depot.id].lat = event.marker._lngLat.lat
      this.depots[depot.id].lng = event.marker._lngLat.lng
      console.log(this.depots)
    },
    removeDepot (event, depot) {
      const index = this.depots.indexOf(depot)
      if (index > -1) {
        this.depots.splice(index, 1)
      }
    },
    saveNumAmbu (num, depot) {
      console.log(num, depot.id)
      this.depots[depot.id].ambulances = num + ''
      console.log(depot.id, depot.ambulances)
    },
    editDepots () {
      if (this.$store.state.editing === false) {
        this.$store.commit('editDepots')
      } else {
        this.$store.commit('saveDepots', this.depots)
        this.$store.commit('finishedEditingDepots')
      }
    },
    hideAddDepotButton () {
      if (this.$store.state.editing === false) {
        return true
      } else {
        return false
      }
    },
    showPopup () {
      this.$store.commit('showDepotPopup')
    }

  }
}
</script>
