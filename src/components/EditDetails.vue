<template>
  <v-card>
    <v-card-title
      class="font-weight-thin
     md-2 pr-6 pb-0"
    >
      {{ $t("editSimDetails") }}
    </v-card-title>
    <v-container class="mt-5">
      <v-combobox
        v-model="runTime"
        label="Simulation Running Time (seconds)"
        :items="Object.keys(times)"
        :placeholder="runtime"
        append-icon="mdi-clock-time-four-outline"
        outlined
        color="accent"
      />
      <v-text-field
        v-model="avgEmergencies"
        label="Avg Number of Emergencies Per Day"
        :placeholder="avgEmergencies"
        outlined
        append-icon="mdi-ambulance"
        color="accent"
      />
      <v-btn
        class="headline centered font-weight-light whiteText mx-2 mb-5"
        color="accent"
        width="97%"
        style="position: absolute; bottom: 0; left: 0"
        :disabled="btnDisabled"
        @click="saveSettings()"
      >
        {{ btnText }}
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="grey"
        />
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import DataService from '../services/data.service'

export default {
  components: {},
  data () {
    return {
      saving: false,
      saveLoaded: false,
      runTime: 1500,
      avgEmergencies: 200,
      times: { '1 hour': 3600, '5 hours': 18000, '12 hours': 43200, '1 day': 86400, '4 days': 345600, '1 week': 604800 }
    }
  },
  computed: {
    btnText () {
      if (this.$store.state.running === true) {
        return 'Running...'
      } else {
        return 'Run Simulation'
      }
    },
    btnDisabled () {
      if (this.$store.state.running || this.$store.state.saving) {
        return true
      } else {
        return false
      }
    },
    loading () {
      if (this.$store.state.saving) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.map = null
  },
  methods: {
    async saveSettings () {
      this.$store.commit('saveInfo')
      if (this.runTime in this.times) {
        this.runTime = this.times[this.runTime]
      }

      await DataService.runSimulation(this.runTime, this.avgEmergencies, this.$store.state.depots).then(() => {
        this.$store.commit('saveLoaded')
      })
    }
  }
}
</script>
