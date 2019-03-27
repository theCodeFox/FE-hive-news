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

export const fetchArticleByID = (id) => {
  return axios
    .get(`/articles/${id}`)
}

export const fetchCommentsByArticleID = (id) => {
  return axios
    .get(`/articles/${id}/comments`)
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
