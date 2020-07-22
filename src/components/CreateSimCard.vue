<template>
  <v-card class="centered">
    <v-card-text>
      <v-btn
        class="headline centered font-weight-light whiteText mr-2"
        color="accent"
        width="100%"
        :disabled="runSimDisabled"
        @click="runSimulation()"
      >
        {{ runBtnText }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
import DataService from '../services/data.service'

export default {
  data () {
    return {
      clicked: false,
      running: false,
      saving: false,
      saveLoaded: false
    }
  },
  computed: {
    runBtnText () {
      if (this.running === true) {
        return 'Running Simulation...'
      } else {
        return 'Run Simulation'
      }
    },
    runSimDisabled () {
      if (!this.saveLoaded) {
        return true
      } else if (this.running) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async runSimulation () {
      this.running = true
      await DataService.runSimulation().then(response => {
        console.log(response)
        this.running = false
        this.saveLoaded = false
        return response
      })
    }
  }
}
</script>

<style></style>
