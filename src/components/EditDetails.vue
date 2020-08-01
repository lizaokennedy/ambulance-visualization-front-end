<template>
  <v-card>
    <v-card-title class="font-weight-thin md-2 pr-6 pb-0">
      Edit Simulation Details
    </v-card-title>
    <v-container class="mt-5">
      <v-text-field
        v-model="runTime"
        label="Simulation Running Time"
        :placeholder="runTime"
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
      runTime: 1000,
      avgEmergencies: 83
    }
  },
  computed: {
    saveBtnText () {
      if (this.$store.state.saving === true) {
        return 'Saving...'
      } else {
        return 'Save Settings'
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
      await DataService.saveSettings(this.runTime, this.avgEmergencies, this.$store.state.depots).then((response) => {
        console.log(response)
        this.$store.commit('saveLoaded')
      })
    }
  }
}
</script>
