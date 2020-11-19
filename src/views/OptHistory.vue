<template>
  <div class="history">
    <v-card
      class="border"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 display-1 font-weight-thin">
            {{ $t("historyOpt.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2">
            {{ $t("historyOpt.brief") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card
      class="ma-7"
      flat
      height="35rem"
    >
      <vuescroll
        v-if="results.length > 0"
        :ops="ops"
      >
        <v-list class="ma-7 mt-0">
          <v-list-item
            v-for="(item, i) in results"
            :key="i"
          >
            <v-list-item-content>
              <v-card
                flat
                outlined="true"
                color="secondary"
              >
                <OptItem
                  :id="item.id"
                  :response-time="item.response_time"
                  :status="item.status"
                />
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </vuescroll>
      <v-card
        v-else
        flat
        center
      >
        <v-card-title class=" font-weight-thin  justify-center">
          {{ $t("historyOpt.noresults") }}
        </v-card-title>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import OptItem from '../components/OptItem.vue'
import DataService from '../services/data.service'
import vuescroll from 'vuescroll'

export default {
  name: 'History',
  components: {
    OptItem,
    vuescroll
  },
  data: () => ({
    dataService: DataService,
    results: [],
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
    }
  }),
  mounted () {
    DataService.fetchOptimizations().then(response => {
      this.results = response
    })
  }
}
</script>
