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

  async saveSettings (time: number, avg: number, depots: Array<object>) {
    let result = ''
    try {
      await axios
        .post(urlBase + 'saveSettings', { time: time, avgEmergencies: avg, depots: depots })
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
  async getTotalResponses (simID: string) {
    let total = 0
    try {
      await axios
        .post(urlBase + 'getNumResponses', { simID: simID })
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

  async getAvgDistance (simID: string) {
    let total = 0
    try {
      await axios
        .post(urlBase + 'getAvgDistance', { simID: simID })
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
  async getAvgResponseTime (simID: string) {
    let time = 0
    try {
      await axios
        .post(urlBase + 'getAvgResponseTime', { simID: simID })
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
