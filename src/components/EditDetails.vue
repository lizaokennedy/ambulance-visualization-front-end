<template>
  <v-card>
    <v-card-title class="font-weight-thin md-2 pr-6 pb-0">
      Edit Simulation Details
    </v-card-title>
    <v-container class="mt-5">
      <v-text-field
        v-model="first"
        label="Simulation Running Time"
        placeholder="5000"
        append-icon="mdi-clock-time-four-outline"
        outlined
        color="accent"
      />
      <v-text-field
        v-model="first"
        label="Avg Number of Emergencies Per Day"
        placeholder="83"
        outlined
        append-icon="mdi-ambulance"
        color="accent"
      />
      <v-btn
        class="headline centered font-weight-light whiteText mb-2 mr-2"
        color="accent"
        width="100%"
      >
        Edit Depots
      </v-btn>
      <v-btn
        class="headline centered font-weight-light whiteText mb-2 mr-2"
        color="accent"
        width="100%"

        :disabled="saving"
        @click="saveSettings()"
      >
        {{ saveBtnText }}
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
      saveLoaded: false
    }
  },
  computed: {
    saveBtnText () {
      if (this.saving === true) {
        return 'Saving...'
      } else {
        return 'Save Settings'
      }
    }
  },
  methods: {
    async saveSettings () {
      this.saving = true
      // TODO parse uploaded files through as jsons
      await DataService.saveSettings().then(response => {
        console.log(response)
        this.saving = false
        this.saveLoaded = true
      })
    }
  }
}
</script>
