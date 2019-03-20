import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import './App.css';
import Home from './components/Home';
import Topics from './components/Topics';
import Users from './components/Users';
import { fetchData, deleteArticle } from './utils/app-utils';
import ArticlePage from './components/ArticlePage';

class App extends Component {
  state = {
    user: "",
    users: [],
    topics: [],
    articles: []
  }
  
  componentDidMount = () => {
    this.fetchAllData()
      .then(([users, topics, articles]) => {
        return this.setState({
          users: users,
          topics: topics,
          articles: articles
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
    const { user, users, topics, articles } = this.state;
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
            filterArticles={this.filterArticles}
          />
          <Users path="/users" users={users} articles={articles}  removeArticle={this.removeArticle}/>
          <ArticlePage
            path="/articles/:article_id"
            removeArticle={this.removeArticle}
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
    return Promise.all([users, topics, articles])
  }
  
  removeArticle = (article_id) => {
    console.log(this.state.articles)
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

}

export default App;
