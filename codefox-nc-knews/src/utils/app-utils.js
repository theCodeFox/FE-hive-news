import axios from 'axios';

export const fetchData = (endpoint) => {
    return axios
      .get(`https://thecodefox-nc-knews.herokuapp.com/api/${endpoint}`)
      .then(({ data }) => {
          return data[endpoint]
      })
};