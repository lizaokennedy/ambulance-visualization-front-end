<template>
  <v-card class="centered">
    <v-card-text>
      <v-btn
        class="headline centered font-weight-light whiteText mr-2"
        color="accent"
        width="100%"
        :disabled="runSimDisabled"
        @click="runOptimization()"
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
      if (this.$store.state.runningOpt === true) {
        return 'Running Optimization...'
      } else {
        return 'Run Optimization'
      }
    },
    runSimDisabled () {
      if (!this.$store.state.saveOptLoaded) {
        return true
      } else if (this.$store.state.runningOpt) {
        return true
      } else {
        return false
      }
    },
    loading () {
      if (this.$store.state.runningOpt) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async runOptimization () {
      this.$store.commit('runOptimization')
      await DataService.runOptimization(this.$store.state.runTime, this.$store.state.avgEmergencies, this.$store.state.depots).then(response => {
        this.$store.commit('finishedRunningOpt', [response.id, response.success])
        return response
      })
    }
  }
}
</script>

<style></style>
