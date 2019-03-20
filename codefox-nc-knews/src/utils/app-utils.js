import axios from 'axios';
import React from 'react';

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

export const voteHeart = (votes) => {
  return votes >= 0
    ? <img src={require("../images/rainbow_heart.png")} alt="heart emoji" height="20px" width="20px" />
    : <img src={require("../images/broken-heart-emoji.png")} alt="broken heart emoji" height="20px" width="20px" />
}