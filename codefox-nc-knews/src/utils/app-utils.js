import axios from 'axios';
import React from 'react';

export const fetchData = (endpoint) => {
  return axios
    .get(`https://thecodefox-nc-knews.herokuapp.com/api/${endpoint}`)
    .then(({ data }) => {
      return data[endpoint]
    })
};

export const fetchTotalArticles = () => {
  return axios
    .get('https://thecodefox-nc-knews.herokuapp.com/api/articles')
    .then(({ data }) => {
      return data.total_articles
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

export const votingButtons = (voteChange, handleVote) => {
  return <span><button className="vote" onClick={() => handleVote(1)} disabled={voteChange === 1}>{voteHeart(0)}</button> <button className="vote" onClick={() => handleVote(-1)} disabled={voteChange === -1}>{voteHeart(-1)}</button></span>
}

export const patchVote = (voteChange, dataType, id) => {
  const changedVote = { inc_votes: voteChange }
  return axios
    .patch(`https://thecodefox-nc-knews.herokuapp.com/api/${dataType}/${id}`, changedVote)
};