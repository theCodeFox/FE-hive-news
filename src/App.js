import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import Img from 'react-image';
import ls from 'local-storage';
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
  fetchFilteredArticles,
  postArticle,
} from './utils/app-utils';
import { handleError, loadingIcon } from './utils/utils'
import ArticlePage from './components/ArticlePage';
import NotFound from './components/NotFound';
import Login from './components/Login';
import defaultAvatar from './images/nc-knews-default-avatar.png';
import Footer from './components/Footer';

class App extends Component {
  state = {
    adminUsers: ['grumpy19', 'jessjelly'],
    access: ls.get('access') || 'none',
    user: ls.get('user') || "Anonymous",
    userAvatar: ls.get('userAvatar') || 'https://banner2.kisspng.com/20180326/fde/kisspng-what-emoji-2-ghost-it-coque-android-ghost-5ab94bf160b6f3.3122808615220930413962.jpg',
    users: [],
    topics: [],
    articles: [],
    total_articles: 0,
    p: 1,
  }

  componentDidMount = () => {
    this.fetchAllData()
      .then(([users, topics, articles, totalArticles]) => {
        return this.setState({
          access: ls.get('access') || 'none',
          user: ls.get('user') || "Anonymous",
          userAvatar: ls.get('userAvatar') || 'https://banner2.kisspng.com/20180326/fde/kisspng-what-emoji-2-ghost-it-coque-android-ghost-5ab94bf160b6f3.3122808615220930413962.jpg',
          users,
          topics,
          articles,
          total_articles: totalArticles,
        })
      })
      .catch(err => handleError(err))
  }

  componentDidUpdate = (prevProps, prevState) => {
    const changedState = prevState !== this.state || prevProps !== this.props;
    if (changedState) {
      this.fetchAllData();
    }
  }

  render() {
    const { access, user, userAvatar, users, topics, articles, total_articles, p } = this.state;
    return (
      <div className="App">
        <nav className="nav nav-top">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/topics" className="nav-link">Topics</Link>
          {(access === 'admin') && <Link to="/users" className="nav-link">Users</Link>}
          <Link to="/login" className="nav-link nav-right">
            {(user === 'Anonymous') ? 'Join Us Here!' : ((user.length > 15) ? `Hello ${user.slice(0, 12)}...` : `Hello ${user}`)}<Img src={[userAvatar, defaultAvatar]} alt={`${user || `Anonymous`}'s avatar`} height="30px" width="30px" className="nav-img" />
          </Link>
        </nav>
        <Router className="main" tabIndex="">
          <Home path="/" />
          <Topics
            path="/topics"
            access={access}
            topics={topics}
            articles={articles}
            total_articles={total_articles}
            filterArticles={this.filterArticles}
            addTopic={this.addTopic}
            addArticle={this.addArticle}
            changeArticlePage={this.changeArticlePage}
            p={p}
          />
          {(access === 'admin') && <Users
            path="/users"
            users={users}
            articles={articles}
            removeArticle={this.removeArticle}
            addUser={this.addUser}
          />}
          <ArticlePage
            path="/articles/:article_id"
            access={access}
            removeArticle={this.removeArticle}
            user={user}
          />
          <Login
            path="/login"
            user={user}
            users={users}
            addUser={this.addUser}
            changeUser={this.changeUser}
            logOut={this.logOut}
          />
          <NotFound path="/not-found" default />
        </Router>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }

  logOut = () => {
    const user = "Anonymous";
    const userAvatar = 'https://banner2.kisspng.com/20180326/fde/kisspng-what-emoji-2-ghost-it-coque-android-ghost-5ab94bf160b6f3.3122808615220930413962.jpg';
    this.setState({ user, userAvatar, access: 'none' })
    ls.set('access', 'none')
    ls.set('user', user);
    ls.set('userAvatar', userAvatar)
  }

  changeUser = (user, userAvatar) => {
    const { adminUsers } = this.state;
    const checkAdminAccess = adminUsers.filter(adminUser => adminUser === user);
    const userAccess = (checkAdminAccess.length === 1) ? 'admin' : ((user === 'Anonymous') ? 'none' : 'member');
    this.setState({ user, userAvatar, access: userAccess })
    ls.set('access', userAccess)
    ls.set('user', user);
    ls.set('userAvatar', userAvatar)
  }

  changeArticlePage = (pageChange) => {
    const { p, total_articles } = this.state;
    const maxPage = Math.ceil(total_articles / 10);
    let newPage = p + pageChange;
    if (newPage > maxPage) newPage = 1;
    if (newPage === 0) newPage = maxPage;
    fetchData('articles', newPage)
      .then(articles => {
        return this.setState({
          articles,
          p: newPage,
        })
      })
      .catch(err => handleError(err))
  }

  fetchAllData = () => {
    const page = this.state.p;
    const users = fetchData('users');
    const topics = fetchData('topics');
    const articles = fetchData('articles', page);
    const totalArticles = fetchTotalArticles();
    return Promise.all([users, topics, articles, totalArticles])
      .catch(err => handleError(err))
  }

  removeArticle = (article_id) => {
    const newArticles = this.state.articles.filter(article => article.article_id !== article_id)
    deleteArticle(article_id)
      .then(() => {
        return this.setState({
          articles: newArticles
        })
      })
      .catch(err => handleError(err))
  }

  filterArticles = (query) => {
    fetchFilteredArticles(query)
      .then(filteredArticles => this.setState({
        articles: filteredArticles, p: 1
      })
      )
      .catch(err => handleError(err))
  }

  addTopic = (newSlug, newDescription) => {
    postTopic(newSlug, newDescription)
      .then(newTopic => {
        this.setState(prevState => {
          const formattedTopics = [newTopic, ...prevState.topics];
          return { topics: formattedTopics }
        })
      })
      .catch(err => handleError(err))
  }

  addArticle = (newTitle, newTopic, newBody) => {
    const author = this.state.user
    postArticle(author, newTitle, newTopic, newBody)
      .then(newArticle => {
        this.setState(prevState => {
          const formattedArticles = [newArticle, ...prevState.articles];
          return { articles: formattedArticles }
        })
      })
      .catch(err => handleError(err))
  }

  addUser = (newUsername, newAvatarURL, newName) => {
    postUser(newUsername, newAvatarURL, newName)
      .then(newUser => {
        this.setState(prevState => {
          const formattedUsers = [newUser, ...prevState.users];
          return { users: formattedUsers }
        })
      })
      .catch(err => handleError(err))
  }

}

export default App;
