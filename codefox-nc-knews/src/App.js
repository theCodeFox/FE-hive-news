import React, { Component } from 'react';
import { Router, Link } from '@reach/router'
import './App.css';
import Home from './components/Home';
import Topics from './components/Topics';
import Users from './components/Users';
import { fetchData} from './utils/app-utils';

class App extends Component {
  state = {
    user: "",
    users: [],
    topics: [],
    articles: [],
    comments: []
  }
  
  componentDidMount = () => {
    const users = fetchData('users');
    const topics = fetchData('topics');
    const articles = fetchData('articles');
    return Promise.all([users, topics, articles])
    .then(([users, topics, articles]) => {
      return this.setState({
        users: users,
        topics: topics,
        articles: articles
      })
    })
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
          <Topics path="/topics" topics={topics} articles={articles} />
          <Users path="/users" users={users} articles={articles} />
        </Router>
        <nav className="nav">
          im a footer
        </nav>
      </div>
    );
  }
}

export default App;
