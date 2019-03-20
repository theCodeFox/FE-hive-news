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

export const formatDateTime = (dateTime) => {
  const date = dateTime.slice(0, 10).split('-').reverse().join('-')
  const time = dateTime.slice(11, 16)
  return `created at ${time} on ${date}`
}

export const fetchArticleByID = (id) => {
  return axios
    .get(`https://thecodefox-nc-knews.herokuapp.com/api/articles/${id}`)
}

export const fetchCommentsByArticleID = (id) => {
  return axios
    .get(`https://thecodefox-nc-knews.herokuapp.com/api/articles/${id}/comments`)
}