import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saveLoaded: false,
    saving: false,
    running: false,
    editDepots: 'Edit Depots',
    editing: false,
    draggable: false,
    simulationID: 24,
    simCompletePopup: false,
    depots: []
  },
  mutations: {
    saveInfo (state) {
      state.saving = true
    },
    saveLoaded (state) {
      state.saveLoaded = true
      state.saving = false
    },
    runSimulation (state) {
      state.running = true
    },
    finishedRunning (state, payload) {
      state.simCompletePopup = true
      state.simulationID = payload
      state.saveLoaded = false
      state.running = false
    },
    editDepots (state) {
      state.editing = true
      state.editDepots = 'Save Changes'
      state.draggable = true
    },
    finishedEditingDepots (state) {
      state.editing = false
      state.draggable = false
      state.editDepots = 'Edit Depots'
    },
    saveDepots (state, payload) {
      state.depots = payload
    },
    closePopup (state) {
      state.simCompletePopup = false
    }
  },
  actions: {},
  modules: {}
})
