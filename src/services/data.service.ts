import { AxiosResponse } from "axios";
import Simulation from "../models/simulation.model";
const axios = require("axios").default;

const DataService = {
  async getTitle() {
    let title = "";
    try {
      await axios
        .get("http://127.0.0.1:5000/api")
        .then(function(response: AxiosResponse) {
          title = response.data;
        })
        .catch(function(error: Error) {
          console.log(error);
        });

      return title;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchSimulations() {
    let sims: any = [];
    try {
      await axios
        .get("http://127.0.0.1:5000/api/getAllSimulations")
        .then(function(response: AxiosResponse) {
          sims = response.data.sims;
          console.log(sims);
        })
        .catch(function(error: Error) {
          console.log(error);
        });

      return this.createSimulationList(sims, sims.length);
    } catch (error) {
      console.log(error);
    }
  },

  createSimulationList(sims: any, length: number) {
    let i;
    const simList: Simulation[] = [];

    for (i = 0; i < length; i++) {
      const s = new Simulation(
        sims[i].id,
        sims[i].year,
        sims[i].startTime,
        sims[i].endTime,
        sims[i].status
      );
      simList.push(s);
    }

    return simList;
  }
};

export default DataService;
