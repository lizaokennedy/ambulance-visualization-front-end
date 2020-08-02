<template>
  <v-card height="20em">
    <v-card-title class="font-weight-thin md-2 pr-6 pb-0">
      Ambulance travel density
    </v-card-title>
    <v-list-item>
      <v-list-item-content>
        <div
          class="deck-container"
          style="height: 15em"
        >
          <div
            id="map"
            ref="map"
          />
          <canvas
            id="deck-canvas"
            ref="canvas"
          />
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { Deck } from '@deck.gl/core'
import { HeatmapLayer } from '@deck.gl/aggregation-layers'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  components: {
  },
  data () {
    return {
      accessToken:
        'pk.eyJ1IjoibGl6YW9rZW5uZWR5IiwiYSI6ImNrY3Z0ZDB0cDA3aXcycW1zNW00Nmx2aTEifQ.-DZwZVyLVc1Z0m4U9KM_Pw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/lizaokennedy/ckcvtmhe90s9q1iqy33gxp0ld', // your map style
      areaName: 'Cape Town',
      viewState: {
        latitude: -33.864481,
        longitude: 18.470741,
        zoom: 10,
        bearing: 0,
        pitch: 0
      }
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
    this.map = null
    this.deck = null
  },
  mounted () {
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.map,
      interactive: false,
      style: this.mapStyle,
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing
    })

    this.deck = new Deck({
      canvas: this.$refs.canvas,
      width: '100%',
      height: '100%',
      initialViewState: this.viewState,
      controller: true,
      layers: [
        new HeatmapLayer({
          data: [
            { position: [18.470741, -33.864481], weight: 1 }, { position: [18.570741, -33.904481], weight: 10 }
          ],
          getPosition: d => d.position,
          getWeight: d => d.weight
        })
      ],
      // change the map's viewstate whenever the view state of deck.gl changes
      onViewStateChange: ({ viewState }) => {
        this.map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch
        })
      }
    })
  },
  methods: {
  }
}
</script>
