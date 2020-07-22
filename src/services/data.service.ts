import { AxiosResponse } from 'axios'
import { Simulation } from '../models/simulation.model'
const axios = require('axios').default
const urlBase = 'http://localhost:5000/api/'
const DataService = {
  async getTitle () {
    let title = ''
    try {
      await axios
        .get(urlBase)
        .then(function (response: AxiosResponse) {
          title = response.data
        })
        .catch(function (error: Error) {
          return error
        })

      return title
    } catch (error) {
      return error
    }
  },

  async fetchSimulations () {
    let sims: Simulation[] = []
    try {
      await axios
        .get(urlBase + 'getAllSimulations')
        .then(function (response: AxiosResponse) {
          sims = response.data.sims
        })
        .catch(function (error: Error) {
          return error
        })
      return this.createSimulationList(sims, sims.length)
    } catch (error) {
      return error
    }
  },

  async runSimulation () {
    let result = ''
    try {
      await axios
        .get(urlBase + 'runSimulation')
        .then(function (response: AxiosResponse) {
          result = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return result
    } catch (error) {
      return error
    }
  },

  async saveSettings () {
    let result = ''
    try {
      await axios
        .post(urlBase + 'saveSettings', {
          emergency: [
            { time: 13, long: -33.814488, lat: 18.479524 },
            { time: 8, long: -33.806133, lat: 18.483682 },
            { time: 43, long: -33.791686, lat: 18.504186 },
            { time: 67, long: -33.787819, lat: 18.481804 },
            { time: 97, long: -33.804492, lat: 18.487809 },
            { time: 230, long: -33.818350, lat: 18.534776 },
            { time: 450, long: -33.804710, lat: 18.525234 },
            { time: 567, long: -33.756806, lat: 18.517333 },
            { time: 789, long: -33.777613, lat: 18.449529 },
            { time: 890, long: -33.821400, lat: 18.478422 },
            { time: 1230, long: -33.828479, lat: 18.485627 },
            { time: 1567, long: -33.826066, lat: 18.497805 },
            { time: 1460, long: -33.818170, lat: 18.510749 },
            { time: 17, long: -33.817142, lat: 18.514900 }
          ],
          hospital: [
            { long: -33.817307, lat: 18.504812, ambulances: 2 },
            { long: -33.805127, lat: 18.494672, ambulances: 1 },
            { long: -33.814518, lat: 18.486162, ambulances: 1 }
          ]
        })
        .then(function (response: AxiosResponse) {
          result = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return result
    } catch (error) {
      return error
    }
  },

  createSimulationList (sims: Simulation[], length: number) {
    let i
    const simList: Simulation[] = []
    for (i = 0; i < length; i++) {
      const s = new Simulation(
        sims[i].id,
        sims[i].year,
        sims[i].sim_end,
        sims[i].sim_start,
        sims[i].status
      )
      simList.push(s)
    }
    return simList
  },

  async getShortestPath (node1: number, node2: number) {
    let path = ''
    try {
      await axios
        .get(urlBase + 'getShortestPath', {
          params: {
            start: node1,
            end: node2
          }
        })
        .then(function (response: AxiosResponse) {
          path = response.data
        })
        .catch(function (error: Error) {
          return error
        })

      return path
    } catch (error) {
      return error
    }
  },

  async getResponsesPerWeek () {
    let weeklyCounts = ''
    try {
      await axios
        .get(urlBase + 'getResponseCalls')
        .then(function (response: AxiosResponse) {
          weeklyCounts = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return weeklyCounts
    } catch (error) {
      return error
    }
  },
  async getTotalResponses () {
    let total = 0
    try {
      await axios
        .get(urlBase + 'getNumResponses')
        .then(function (response: AxiosResponse) {
          total = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return total
    } catch (error) {
      return error
    }
  },

  async getTotalTransfers () {
    let total = 0
    try {
      await axios
        .get(urlBase + 'getNumTransfers')
        .then(function (response: AxiosResponse) {
          total = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return total
    } catch (error) {
      return error
    }
  },
  async getAvgResponseTime () {
    let time = 0
    try {
      await axios
        .get(urlBase + 'getAvgResponseTime')
        .then(function (response: AxiosResponse) {
          time = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return time
    } catch (error) {
      return error
    }
  }
}

export default DataService
