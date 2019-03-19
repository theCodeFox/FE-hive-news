import axios from 'axios';

export const getUserByUsername = (username) => {
  return axios
    .get(`https://thecodefox-nc-knews.herokuapp.com/api/users/${username}`)
    .then(({ data }) => {
        return data.user
    })
};

export const getRelatedUserArticles = (articles, username) => {
    return articles.filter(article => article.author === username)
};