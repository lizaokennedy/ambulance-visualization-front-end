import { AxiosResponse } from 'axios'
const axios = require('axios').default

const DataService = {
  async getTitle () {
    let title = ''
    try {
      await axios
        .get('http://127.0.0.1:5000/api')
        .then(function (response: AxiosResponse) {
          // handle success
          title = response.data
        //   const heading = document.getElementById('heading')
        //   if (heading !== null) {
        //     heading.innerHTML = title
        //   }
        })
        .catch(function (error: Error) {
          console.log(error)
        })

      return title
    } catch (error) {
      console.log(error)
    }
  }
}

export default DataService
