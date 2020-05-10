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

  createSimulationList (sims: Simulation[], length: number) {
    let i
    const simList: Simulation[] = []
    for (i = 0; i < length; i++) {
      const s = new Simulation(
        sims[i].id,
        sims[i].year,
        sims[i].startTime,
        sims[i].endTime,
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
  }
}

export default DataService
