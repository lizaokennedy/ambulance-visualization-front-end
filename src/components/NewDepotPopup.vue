<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline font-weight-thin">
          Add a New Depot
        </v-card-title>
        <v-container class="mt-5">
          <v-text-field
            v-model="lat"
            label="Latitude"
            :placeholder="lat"
            outlined
            append-icon="mdi-ambulance"
            color="accent"
          />
          <v-text-field
            v-model="lng"
            label="Longitude"
            :placeholder="lng"
            outlined
            append-icon="mdi-ambulance"
            color="accent"
          />
          <v-text-field
            v-model="ambulances"
            label="Number of Ambulances"
            :placeholder="ambulances"
            outlined
            append-icon="mdi-ambulance"
            color="accent"
          />
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            text
            @click="saveDepot()"
          >
            Save Depot
          </v-btn>
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
  data () {
    return {
      lat: -33.803280,
      lng: 18.464300,
      ambulances: 0
    }
  },
  computed: {
    dialog () {
      return this.$store.state.newDepotPopup
    }
  },
  methods: {
    close () {
      this.$store.commit('closeDepotPopup')
    },
    saveDepot () {
    //   constrict and add to below func
      console.log(this.lat)
      console.log(this.lng)
      console.log(this.ambulances)
      const ID = this.$store.state.depots.length
      console.log(ID)
      this.$store.commit('addDepot', { id: ID, coordinate: [this.lng, this.lat], ambulances: this.ambulances })
    }
  }
}
</script>
