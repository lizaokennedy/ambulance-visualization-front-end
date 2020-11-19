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

    <div class="d-flex flex-column flex-wrap mx-8 mb-0">
      <div class=" d-flex flex-wrap mt-2 mb-0">
        <InfoCard
          :title="$t('details.info.responseTime')"
          :data="time()"
          class="flex-grow-1 mr-2"
          :color="color1"
        />
        <InfoCard
          :title="$t('details.info.usedAmbus')"
          :data="numAmbus()"
          class="flex-grow-1 ml-2"
          :color="color2"
        />
      </div>
    </div>

    <div class="ColDisplay border mt-2">
      <v-card
        class="ColDisplayElem mr-2 mt-0"
        height="30rem"
        outlined
      >
        <v-card-title class="font-weight-thin md-2 mb-0 pr-6 pb-0">
          {{ $t("details.allocation") }}
        </v-card-title>
        <v-card-subtitle class="font-weight-thin mt-1 md-2 pr-6 pb-0">
          {{ $t("details.alloBrief") }}
        </v-card-subtitle>
        <v-card
          class="ColDisplayElem"
          height="24rem"
          flat
        >
          <vuescroll :ops="ops">
            <v-list
              class="ma-1 mt-0"
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
                      :ambus="item.ambulances"
                    />
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </vuescroll>
        </v-card>
      </v-card>
      <AllocationMap
        :depots="depots"
        class="ColDisplayElem ml-2"
      />
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
    depots: [],
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
    optTime: 0,
    ambulances: 0

  }),
  mounted () {
    DataService.fetchDepots(this.$route.params.id).then((response) => {
      this.depots = response
    })
    DataService.getOptResponseTime(this.$route.params.id).then(response => {
      this.optTime = response
      console.log(response)
    })
  },
  methods: {
    time () {
      const d = this.optTime * 60
      const h = Math.floor(d / 3600)
      const m = Math.floor(d % 3600 / 60)
      const s = Math.floor(d % 3600 % 60)

      const hDisplay = h > 0 ? h + 'h ' : ''
      const mDisplay = m > 0 ? m + 'm ' : ''
      const sDisplay = s > 0 ? s + 's ' : ''
      return hDisplay + mDisplay + sDisplay
    },
    numAmbus () {
      let total = 0
      for (let i = 0; i < this.depots.length; i++) {
        total += this.depots[i].ambulances
      }
      return total
    }
  }
}
</script>
