import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import './App.css';
import Home from './components/Home';
import Topics from './components/Topics';
import Users from './components/Users';
import {
  fetchData,
  deleteArticle,
  fetchTotalArticles,
  postTopic,
  postUser,
} from './utils/app-utils';
import ArticlePage from './components/ArticlePage';

class App extends Component {
  state = {
    user: "mrTiddles",
    users: [],
    topics: [],
    articles: [],
    total_articles: 0,
  }
  
  componentDidMount = () => {
    this.fetchAllData()
      .then(([users, topics, articles, totalArticles]) => {
        return this.setState({
          users,
          topics,
          articles,
          total_articles: totalArticles
      })
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const changedState = prevState !== this.state || prevProps !== this.props;
    if (changedState) {
      this.fetchAllData();
    }
  }

  render() {
    const { user, users, topics, articles, total_articles } = this.state;
    return (
      <div className="App">
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/topics" className="nav-link">Topics</Link>
          <Link to="/users" className="nav-link">Users</Link>
          {/* <Link to="/login" className="nav-link"> */}
          {user || `Anonymous User`}
          {/* </Link> */}
        </nav>
        <Router className="main">
          <Home path="/" />
          <Topics
            path="/topics"
            topics={topics}
            articles={articles}
            total_articles={total_articles}
            filterArticles={this.filterArticles}
            addTopic={this.addTopic}
          />
          <Users
            path="/users"
            users={users}
            articles={articles}
            removeArticle={this.removeArticle}
            addUser={this.addUser}
          />
          <ArticlePage
            path="/articles/:article_id"
            removeArticle={this.removeArticle}
            user={user}
          />
        </Router>
        <nav className="nav">
          footer
        </nav>
      </div>
    );
  }

  fetchAllData = () => {
    const users = fetchData('users');
    const topics = fetchData('topics');
    const articles = fetchData('articles');
    const totalArticles = fetchTotalArticles();
    return Promise.all([users, topics, articles, totalArticles])
  }
  
  removeArticle = (article_id) => {
    const newArticles = this.state.articles.filter(article => article.article_id !== article_id)
    deleteArticle(article_id)
      .then(() => {
        return this.setState({
          articles: newArticles
        })
      })
  }

  filterArticles = (topic) => {
    fetchData('articles')
      .then(articles => {
        const filteredArticles = articles.filter(article => article.topic === topic)
        return this.setState({
          articles: filteredArticles
        })
      })
  }

  addTopic = (newSlug, newDescription) => {
    postTopic(newSlug, newDescription)
      .then(newTopic => {
        this.setState(prevState => {
          const formattedTopics = [newTopic, ...prevState.topics];
          return { topics: formattedTopics }
        })
      })
  }

  addUser = (newUsername, newAvatarURL, newName) => {
    postUser(newUsername, newAvatarURL, newName)
      .then(newUser => {
        this.setState(prevState => {
          const formattedUsers = [newUser, ...prevState.users];
          return { users: formattedUsers }
        })
      })
  }

}

export default App;
