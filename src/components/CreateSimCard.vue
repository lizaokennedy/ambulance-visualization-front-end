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
        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="grey"
        />
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
import DataService from '../services/data.service'

export default {
  data () {
    return {}
  },
  computed: {
    runBtnText () {
      if (this.$store.state.running === true) {
        return 'Running Simulation...'
      } else {
        return 'Run Simulation'
      }
    },
    runSimDisabled () {
      if (!this.$store.state.saveLoaded) {
        return true
      } else if (this.$store.state.running) {
        return true
      } else {
        return false
      }
    },
    loading () {
      if (this.$store.state.running) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async runSimulation () {
      this.$store.commit('runSimulation')
      await DataService.runSimulation().then(response => {
        this.$store.commit('finishedRunning', response)
        return response
      })
    }
  }
}
</script>

<style></style>
