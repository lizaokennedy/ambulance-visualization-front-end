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
              draggable="true"
              color="#172A3A"
            >
              <MglPopup>
                <div>
                  <v-card-subtitle class="pa-2">
                    Depot ID: {{ depot.id }}
                  </v-card-subtitle>
                  <v-text-field
                    v-model="first"
                    label="Ambulances"
                    :placeholder="depot.ambulances"
                    outlined
                    append-icon="mdi-ambulance"
                    color="accent"
                    class="pa-0 ma-0"
                  />
                  <v-btn
                    color="accent"
                    width="100%"
                  >
                    Save Changes
                  </v-btn>
                </div>
              </MglPopup>
            </MglMarker>
          </MglMap>
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
      depots: [{ id: 12, coordinate: [18.504812, -33.817307], ambulances: 5 },
        { id: 12, coordinate: [18.494672, -33.805127], ambulances: 5 },
        { id: 12, coordinate: [18.486162, -33.814518], ambulances: 5 }],
      coordinates: [18.470741, -33.864481]

    }
  },

  created () {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
</script>
