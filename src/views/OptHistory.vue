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
    <v-list class="ma-7">
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
              :response-time="item.responseTime"
              :status="item.status"
            />
          </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src
import OptItem from '../components/OptItem.vue'
import DataService from '../services/data.service'

export default {
  name: 'History',
  components: {
    OptItem
  },
  data: () => ({
    dataService: DataService,
    results: []
  }),
  mounted () {
    DataService.fetchOptimizations().then(response => {
      this.results = response
    })
  }
}
</script>
