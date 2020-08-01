import { Deck } from '@deck.gl/core'
import { HeatmapLayer } from '@deck.gl/aggregation-layers'

const INITIAL_VIEW_STATE = {
  latitude: 37.8,
  longitude: -122.45,
  zoom: 15
}

export const heatmap = new Deck({
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new HeatmapLayer({
      data: [
        { position: [-122.45, 37.8], weight: 10 }
      ],
      getPosition: d => d.position,
      getWeight: d => d.weight
    })
  ]
})
