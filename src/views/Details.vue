<template>
  <div
    class="details"
    fill-height
  >
    <v-card
      class="border"
      outlined
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("details.title") }} {{ this.$route.params.id }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("details.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <div class="d-flex flex-column flex-wrap mx-8">
      <div class=" d-flex flex-wrap my-2">
        <InfoCard
          :title="$t('details.info.responseTime')"
          :data="avgResponseTime"
          class="flex-grow-1"
          :color="color1"
        />
        <InfoCard
          :title="$t('details.info.avgDist')"
          :data="avgDist"
          class="flex-grow-1 mx-2"
          :color="color2"
        />
        <InfoCard
          :title="$t('details.info.usedAmbus')"
          :data="numAmbus"
          class="flex-grow-1"
          :color="color3"
        />
      </div>
    </div>

    <div class="ColDisplay border">
      <v-card
        class="ColDisplayElem mr-2"
        height="30rem"
        outlined
      >
        <v-card-title class="font-weight-thin md-2 pr-6 pb-0">
          Allocation
        </v-card-title>
        <v-card
          class="ColDisplayElem"
          height="26rem"
          flat
        >
          <vuescroll :ops="ops">
            <v-list
              class="ma-7"
            >
              <v-list-item
                v-for="(item, i) in depots"
                :key="i"
              >
                <v-list-item-content>
                  <v-card
                    flat
                    outlined="true"
                    color="secondary"
                  >
                    <DepotItem
                      :id="item.id"
                      :lng="item.lng"
                      :lat="item.lat"
                      :ambus="item.ambus"
                    />
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </vuescroll>
        </v-card>
      </v-card>
      <AllocationMap class="ColDisplayElem ml-2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import LineChart from '../components/LineChart.vue'
import DataService from '../services/data.service'
import AllocationMap from '../components/AllocationMap.vue'
import DepotItem from '../components/DepotItem.vue'
import vuescroll from 'vuescroll'
import InfoCard from '../components/InfoCard.vue'

export default {
  name: 'Details',
  components: {
    // LineChart,
    DepotItem,
    AllocationMap,
    vuescroll,
    InfoCard
  },
  data: () => ({
    depots: [
      { id: 0, lng: 18, lat: -33, ambus: 2 },
      { id: 0, lng: 18, lat: -33, ambus: 2 },
      { id: 0, lng: 18, lat: -33, ambus: 2 },
      { id: 0, lng: 18, lat: -33, ambus: 2 }
    ],
    ops: {
      maxHeight: '20rem',
      vuescroll: {
        mode: 'native',
        sizeStrategy: 'percent',
        detectResize: true
      },
      scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: true,
        scrollingY: true,
        speed: 300,
        easing: undefined,
        verticalNativeBarPos: 'right'
      },
      bar: {
        background: '#68B0AB'
      },
      scrollButton: {
        enable: true,
        background: '#68B0AB',
        opacity: 20
      }
    },
    color1: 'pinkText',
    color2: 'mintText',
    color3: 'coralText',
    avgResponseTime: 2678,
    avgDist: 3000,
    numAmbus: 5
  }),
  async beforeCreate () {
    const optID = this.$route.params.id
    const avgDist = await DataService.getAvgDistance(optID).then((response) => {
      return response
    })
    const avgResTime = await DataService.getAvgResponseTime(optID).then(
      (response) => {
        return response
      }
    )

    this.avgResponseTime = parseFloat(avgResTime).toFixed(3)
    this.avgDist = parseFloat(avgDist).toFixed(2)
  },
  methods: {
    getAvgResponseTime () {
      const d = this.avgResponseTime * 60
      const h = Math.floor(d / 3600)
      const m = Math.floor((d % 3600) / 60)
      const s = Math.floor((d % 3600) % 60)

      const hDisplay = h > 0 ? h + 'h ' : ''
      const mDisplay = m > 0 ? m + 'm ' : ''
      const sDisplay = s > 0 ? s + 's ' : ''
      return hDisplay + mDisplay + sDisplay
    }
  }
}
</script>
