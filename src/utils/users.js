import axios from 'axios';
axios.defaults.baseURL = 'https://be-hive-news.herokuapp.com/api';

export const getUserByUsername = (username) => {
  return axios
    .get(`/users/${username}`)
    .then(({ data }) => {
      return data.user
    })
};

export const getRelatedUserArticles = (articles, username) => {
  return articles.filter(article => article.author === username)
};

export const getRelatedUserComments = (username) => {
  return axios
    .get(`/users/${username}/comments`)
    .then(({ data }) => {
      return data.comments
    })
};

export const deleteComment = (id) => {
  return axios
    .delete(`/comments/${id}`)
}