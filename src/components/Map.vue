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
        <div class="ColDisplay">
          <MglMap
            :access-token="accessToken"
            :map-style="mapStyle"
            :mapbox-gl="mapbox - gl"
            :center="coordinates"
            zoom="9"
            class="setSize font-weight-thin ColDisplayElem"
          >
            <MglMarker
              v-for="depot in depots"
              :key="depot.id"
              :coordinates="depot.coordinate"
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
                    v-model="depot.ambulances"
                    :disabled="!draggable"
                    label="Ambulances"
                    :placeholder="depot.ambulances"
                    outlined
                    append-icon="mdi-ambulance"
                    color="accent"
                    class="pa-0 ma-0"
                  />
                </div>
              </MglPopup>
            </MglMarker>
          </MglMap>
          <v-btn
            class="headline centered font-weight-light whiteText mt-2 mb-2 mr-2"
            color="accent"
            width="100%"
            :disabled="btnDisabled"
            @click="editDepots()"
          >
            {{ this.$store.state.editDepots }}
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglPopup, MglMarker } from 'vue-mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  data () {
    return {
      accessToken:
        'pk.eyJ1IjoibGl6YW9rZW5uZWR5IiwiYSI6ImNrY3Z0ZDB0cDA3aXcycW1zNW00Nmx2aTEifQ.-DZwZVyLVc1Z0m4U9KM_Pw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/lizaokennedy/ckcvtmhe90s9q1iqy33gxp0ld', // your map style
      areaName: 'Cape Town',
      depots: [
        { id: 0, coordinate: [18.504812, -33.817307], ambulances: '5' },
        { id: 1, coordinate: [18.494672, -33.805127], ambulances: '3' },
        { id: 2, coordinate: [18.486162, -33.814518], ambulances: '1' }
      ],
      coordinates: [18.470741, -33.864481]
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
      console.log(event.marker._lngLat.lat)
      this.depots[depot.id].coordinate[0] = event.marker._lngLat.lat
      this.depots[depot.id].coordinate[1] = event.marker._lngLat.lng
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
    }
  }
}
</script>
