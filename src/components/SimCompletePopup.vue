<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title
          v-if="this.$store.state.runSuccess"
          class="headline"
        >
          Simulation Complete
        </v-card-title>
        <v-card-title
          v-else
          class="headline"
        >
          Simulation Failed
        </v-card-title>
        <v-card-text v-if="this.$store.state.runSuccess">
          Simulation ID: {{ this.$store.state.simulationID }}
        </v-card-text>
        <v-card-text v-if="this.$store.state.runSuccess">
          Your simulation has finished running and is now ready to be analysed!
        </v-card-text>
        <v-card-text v-else>
          An error occured and your simulation could not finish.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <router-link
            class="link"
            :to="{name: 'Analysis', params: {id: this.$store.state.simulationID }}"
          >
            <v-btn
              v-if="this.$store.state.runSuccess"
              color="accent"
              text
              @click="close()"
            >
              Go To Analysis
            </v-btn>
          </router-link>
          <v-btn
            color="accent"
            text
            @click="close()"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  components: {},
  computed: {
    dialog () {
      return this.$store.state.simCompletePopup
    }
  },
  methods: {
    close () {
      this.$store.commit('closePopup')
    }
  }
}
</script>
