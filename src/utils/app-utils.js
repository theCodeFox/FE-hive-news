import axios from 'axios';
import React from 'react';
axios.defaults.baseURL = 'https://thecodefox-nc-knews.herokuapp.com/api';

export const fetchData = (endpoint, page) => {
  return axios
    .get(`/${endpoint}`, { params: { p: page } })
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
    ? <img src={require("../images/hexagon-up-vote.png")} alt="heart emoji" height="40px" width="35px" className="hexagon-buttons" />
    : <img src={require("../images/hexagon-down-vote.png")} alt="broken heart emoji" height="40px" width="35px" className="hexagon-buttons" />
}

export const votingButtons = (voteChange, handleVote) => {
  return <span><button className="button-image" onClick={() => handleVote(1)} disabled={voteChange === 1}>{voteHeart(0)}</button> <button className="button-image" onClick={() => handleVote(-1)} disabled={voteChange === -1}>{voteHeart(-1)}</button></span>
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

export const deleteImage = () => {
  return <img src={require("../images/hexagon-delete.png")} alt="delete" height="40px" width="50px" className="hexagon-buttons" />
}

export const cancelImage = () => {
  return <img src={require("../images/hexagon-cancel.png")} alt="cancel" height="40px" width="50px" className="hexagon-buttons" />
}

export const submitImage = () => {
  return <img src={require("../images/hexagon-submit.png")} alt="submit" height="40px" width="50px" className="hexagon-buttons" />
}

export const joinImage = () => {
  return <img src={require("../images/hexagon-join.png")} alt="join" height="40px" width="50px" className="hexagon-buttons" />
}

export const logoutImage = () => {
  return <img src={require("../images/hexagon-logout.png")} alt="log out" height="40px" width="50px" className="hexagon-buttons" />
}

export const filterImage = () => {
  return <img src={require("../images/hexagon-filter.png")} alt="filter" height="40px" width="50px" className="hexagon-buttons" />
}

export const viewImage = () => {
  return <img src={require("../images/hexagon-view.png")} alt="view" height="40px" width="50px" className="hexagon-buttons" />
}

export const addImage = () => {
  return <img src={require("../images/hexagon-add.png")} alt="add" height="40px" width="50px" className="hexagon-buttons" />
}

export const rightImage = () => {
  return <img src={require("../images/hexagon-right.png")} alt="next" height="15px" width="15px" className="hexagon-buttons" />
}

export const leftImage = () => {
  return <img src={require("../images/hexagon-left.png")} alt="back" height="15px" width="15px" className="hexagon-buttons" />
}