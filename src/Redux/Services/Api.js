import axios from 'axios';

const api = {

  // Planets Get API
  planetsAPI(res) {
    axios.get("https://findfalcone.herokuapp.com/planets")
      .then(response => {
         res(response)
      })
      .catch((error) => {
         res(error.response)
      })
  },

    // Vehicles Get API
    vehiclesAPI(res) {
        axios.get("https://findfalcone.herokuapp.com/vehicles")
          .then(response => {
             res(response)
          })
          .catch((error) => {
             res(error.response)
          })
      },

          // token Get API
    tokenAPI(res) {
            axios({
                method: "post",
                url: "https://findfalcone.herokuapp.com/token",
                headers: { Accept: "application/json" },
            })
          .then(response => {
             res(response)
          })
          .catch((error) => {
             res(error.response)
          })
      },

    // result POST API
    resultAPI(data, res) {
        axios({
            method: "post",
            url: "https://findfalcone.herokuapp.com/find",
            data: data,
            headers: {  "Accept": "application/json" ,"Content-Type": "application/json" },
          })
      .then(response => {
         res(response)
      })
      .catch((error) => {
         res(error.response)
      })
  },
}

export default api;