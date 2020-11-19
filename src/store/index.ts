import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    saveLoaded: false,
    saveOptLoaded: true,
    saving: false,
    running: false,
    runningOpt: false,
    editDepots: 'Edit Depots',
    editing: false,
    draggable: false,
    simulationID: 24,
    optimizationID: 0,
    runSuccess: true,
    simCompletePopup: false,
    optCompletePopup: false,
    depots: [{}],
    newDepotPopup: false,
    runTime: 1500,
    avgEmergencies: 200,
    numEmergencies: 200,
    ambulances: 5
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
    runOptimization (state) {
      state.runningOpt = true
    },
    finishedRunningOpt (state, payload) {
      state.optCompletePopup = true
      state.optimizationID = payload[0]
      state.runSuccess = payload[1]
      state.saveOptLoaded = true
      state.runningOpt = false
    },
    finishedRunning (state, payload) {
      state.simCompletePopup = true
      state.simulationID = payload[0]
      state.runSuccess = payload[1]
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
      console.log(state.depots)
    },
    closePopup (state) {
      state.simCompletePopup = false
    },
    closeDepotPopup (state) {
      state.newDepotPopup = false
    },
    showDepotPopup (state) {
      state.newDepotPopup = true
    },
    addDepot (state, payload) {
      state.depots.push(payload)
      console.log(state.depots)
    },
    saveNumEmergencies (state, payload) {
      state.numEmergencies = payload
    },
    saveAmbulances (state, payload) {
      state.ambulances = payload
    },
    saveRunTime (state, payload) {
      state.runTime = payload
    }
  },
  actions: {},
  modules: {}
})
