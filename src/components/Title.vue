<template>
  <v-container>
    <v-card
      class="home-card"
      color="white"
    >
      <v-list-item three-line>
        <v-list-item-content class="pa-0">
          <v-list-item-title
            class="headline mb-1 display-1 font-weight-thin centered"
          >
            {{ $t("welcome") }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-light md-2 centered px-10">
            {{ $t("intro") }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-container>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <Card
                :title="startSim.title"
                :icon="startSim.icon"
                :link="startSim.link"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <Card
                :title="history.title"
                :icon="history.icon"
                :link="history.link"
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <Card
                :title="optimize.title"
                :icon="optimize.icon"
                :link="optimize.link"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../components/TitleCard.vue'
import i18n from '../i18n'
import DataService from '../services/data.service'

export default Vue.extend({
  name: 'Title',
  components: {
    Card
  },

  data () {
    return {
      title: 'hello',
      dataService: DataService,
      startSim: {
        title: 'sidebar.startSimulation',
        icon: 'mdi-play-circle-outline',
        link: '/' + i18n.locale + '/simulation'
      },
      history: {
        title: 'sidebar.showHistory',
        icon: 'mdi-history',
        link: '/' + i18n.locale + '/history'
      },
      optimize: {
        title: 'sidebar.optimize',
        icon: 'mdi-chart-timeline-variant-shimmer',
        link: '/' + i18n.locale + '/optimize'
      }
    }
  },
  computed: {}, // computed properties
  methods: {
    getTitle () {
      DataService.getTitle().then(title => {
        if (title !== undefined) {
          const heading = document.getElementById('heading')
          if (heading !== null) {
            heading.innerHTML = title
          }
        }
      })
    },
    getShortestPath () {
      DataService.getShortestPath(10, 12).then(path => {
        if (path !== undefined) {
          const heading = document.getElementById('heading')
          if (heading !== null) {
            heading.innerHTML = path
          }
        }
      })
    }
  }
})
</script>
