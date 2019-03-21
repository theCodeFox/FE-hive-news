import axios from 'axios';
import React from 'react';
axios.defaults.baseURL = 'https://thecodefox-nc-knews.herokuapp.com/api';

export const fetchData = (endpoint) => {
  return axios
    .get(`/${endpoint}`)
    .then(({ data }) => {
      return data[endpoint]
    })
};

export const fetchTotalArticles = () => {
  return axios
    .get('/articles')
    .then(({ data }) => {
      return data.total_articles
    })
};

export const deleteArticle = (id) => {
  return axios
    .delete(`/articles/${id}`)
}

export const formatDateTime = (dateTime) => {
  const date = dateTime.slice(0, 10).split('-').reverse().join('-')
  const time = dateTime.slice(11, 16)
  return `created at ${time} on ${date}`
}

export const fetchArticleByID = (id) => {
  return axios
    .get(`/articles/${id}`)
}

export const fetchCommentsByArticleID = (id) => {
  return axios
    .get(`/articles/${id}/comments`)
}

export const voteHeart = (votes) => {
  return votes >= 0
    ? <img src={require("../images/rainbow_heart.png")} alt="heart emoji" height="20px" width="20px" />
    : <img src={require("../images/broken-heart-emoji.png")} alt="broken heart emoji" height="20px" width="20px" />
}

export const votingButtons = (voteChange, handleVote) => {
  return <span><button className="vote" onClick={() => handleVote(1)} disabled={voteChange === 1}>{voteHeart(0)}</button> <button className="vote" onClick={() => handleVote(-1)} disabled={voteChange === -1}>{voteHeart(-1)}</button></span>
}

export const patchVote = (voteChange, dataType, id) => {
  const changedVote = { inc_votes: voteChange };
  return axios
    .patch(`/${dataType}/${id}`, changedVote)
};

export const postTopic = (slug, description) => {
  const newTopic = { slug, description };
  return axios
    .post('/topics', newTopic)
    .then(({ data }) => data.topic)
}

export const postUser = (username, avatar_url, name) => {
  const newUser = { username, avatar_url, name };
  return axios
    .post('/users', newUser)
    .then(({ data }) => data.user)
}

export const postComment = (id, author, body) => {
  const newComment = { author, body };
  return axios
    .post(`/articles/${id}/comments`, newComment)
    .then(({ data }) => data.comment)
}

export const postArticle = (author, title, topic, body) => {
  const newArticle = { author, title, topic, body };
  console.log(newArticle)
  return axios
    .post('/articles', newArticle)
    .then(({ data }) => data.article)
}

export const fetchFilteredArticles = (query) => {
  return axios
    .get('/articles', { params: query })
    .then(({ data }) => {
      return data.articles
    })
};

export const fetchFilteredComments = (id, query) => {
  return axios
    .get(`/articles/${id}/comments`, { params: query })
    .then(({ data }) => {
      return data.comments
    })
};
