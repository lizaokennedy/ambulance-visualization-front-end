import { AxiosResponse } from 'axios'
import { Simulation } from '../models/simulation.model'
import { Optimization } from '../models/optimization.model'
import { Depot } from '../models/depot.model'

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

  async fetchOptimizations () {
    let opts: Optimization[] = []
    try {
      await axios
        .get(urlBase + 'getAllOptimizations')
        .then(function (response: AxiosResponse) {
          opts = response.data.optimizations
        })
        .catch(function (error: Error) {
          return error
        })
      return this.createOptimizationList(opts, opts.length)
    } catch (error) {
      return error
    }
  },

  async fetchDepots (optID: number) {
    let depots: Depot[] = []
    try {
      await axios
        .post(urlBase + 'getDepots', { optID: optID })
        .then(function (response: AxiosResponse) {
          depots = response.data.depots
        })
        .catch(function (error: Error) {
          return error
        })
      return this.createDepotList(depots, depots.length)
    } catch (error) {
      return error
    }
  },

  async runSimulation (time: number, avg: number, depots: Array<object>) {
    let result = ''
    try {
      await axios
        .post(urlBase + 'runSimulation', { time: time, avgEmergencies: avg, depots: depots })
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
  async runOptimization (time: number, emergenies: number, ambulances: number, depots: Array<object>) {
    let result = ''
    try {
      await axios
        .post(urlBase + 'runOptimization', { time: time, avgEmergencies: emergenies, ambulances: ambulances, depots: depots })
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

  createOptimizationList (opts: Optimization[], length: number) {
    let i
    const optList: Optimization[] = []
    for (i = 0; i < length; i++) {
      const s = new Optimization(
        opts[i].id,
        opts[i].status,
        opts[i].response_time
      )
      optList.push(s)
    }
    return optList
  },

  createDepotList (depots: Depot[], length: number) {
    let i
    const depotList: Depot[] = []
    for (i = 0; i < length; i++) {
      const s = new Depot(
        depots[i].id,
        depots[i].lng,
        depots[i].lat,
        depots[i].ambulances
      )
      depotList.push(s)
    }
    return depotList
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

  async getHeatmapPoints (simID: string) {
    let points: Array<Array<number>> = []
    try {
      await axios
        .post(urlBase + 'getHeatmapPoints', { simID: simID })
        .then(function (response: AxiosResponse) {
          points = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return points
    } catch (error) {
      return error
    }
  },

  async removeSimulation (simID: string) {
    let success = false
    try {
      await axios
        .post(urlBase + 'removeSimulation', { simID: simID })
        .then(function (response: AxiosResponse) {
          success = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return success
    } catch (error) {
      return error
    }
  },

  async removeOptimization (optID: string) {
    let success = false
    try {
      await axios
        .post(urlBase + 'removeOptimization', { optID: optID })
        .then(function (response: AxiosResponse) {
          success = response.data
        })
        .catch(function (error: Error) {
          return error
        })
      return success
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
  },

  async getOptResponseTime (optID: string) {
    let time = 0
    try {
      await axios
        .post(urlBase + 'getOptResponseTime', { optID: optID })
        .then(function (response: AxiosResponse) {
          time = response.data
          console.log(time)
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
