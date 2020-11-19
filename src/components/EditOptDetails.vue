<template>
  <v-card>
    <v-card-title
      class="font-weight-thin
     md-2 pr-6 pb-0"
    >
      Edit Optimization Details
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
        v-model="numEmergencies"
        label="Number of Emergencies"
        :placeholder="numEmergencies"
        outlined
        append-icon="mdi-ambulance"
        color="accent"
      />

      <v-text-field
        v-model="numAmbulances"
        label="Availiable Ambulances"
        :placeholder="numAmbulances"
        outlined
        append-icon="mdi-ambulance"
        color="accent"
      />
      <v-btn
        class="headline centered font-weight-light whiteText mb-2 mr-2"
        color="accent"
        width="100%"
        :disabled="btnDisabled"
        @click="saveSettings()"
      >
        {{ saveBtnText }}
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
      numEmergencies: 200,
      numAmbulances: 5,
      times: { '1 hour': 3600, '5 hours': 18000, '12 hours': 43200, '1 day': 86400, '4 days': 345600, '1 week': 604800 }
    }
  },
  computed: {
    saveBtnText () {
      if (this.$store.state.saving === true) {
        return 'Running...'
      } else {
        return 'Run Optmization'
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

      await DataService.runOptimization(this.runTime, this.numEmergencies, this.numAmbulances, this.$store.state.depots).then(() => {
        this.$store.commit('saveLoaded')
      })
    }
  }
}
</script>
