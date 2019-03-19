import axios from 'axios';

export const fetchData = (endpoint) => {
  return axios
    .get(`https://thecodefox-nc-knews.herokuapp.com/api/${endpoint}`)
    .then(({ data }) => {
      return data[endpoint]
    })
};

export const deleteArticle = (id) => {
  return axios
    .delete(`https://thecodefox-nc-knews.herokuapp.com/api/articles/${id}`)
}