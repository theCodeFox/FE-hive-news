import React, { Component } from 'react';
import User from './User';
import { getUserByUsername, getRelatedUserArticles} from '../utils/users';
import SelectedUser from './SelectedUser';

class Users extends Component {
  state = {
    selectedUser: '',
    relatedArticles: '',
    // relatedComments: ''
  }

  fetchUser = (username) => {
    const { articles } = this.props;
    const fetchedUser = getUserByUsername(username);
    const fetchedRelatedArticles = getRelatedUserArticles(articles, username);
    // const fetchedRelatedComments = getRelatedUserComments(articles, username);
    return Promise.all([fetchedUser, fetchedRelatedArticles])
      .then(([user, articles]) => {
        this.setState({
            selectedUser: user,
            relatedArticles: articles,
            // relatedComments: comments
        })
      })
  }

  render() {
    const { users, removeArticle } = this.props;
    const { selectedUser, relatedArticles } = this.state;
    return <main className="users-comments-grid">
      <p className="users-comments-search">search user</p>
      <div className="users-comments-info">
        <SelectedUser user={selectedUser} articles={relatedArticles} removeArticle={removeArticle} /></div>
      <ul className="users-comments-list">
      {users.map(user => {
          return <User key={user.username} user={user} fetchUser={this.fetchUser} />
      })}
      </ul>
    </main>
  }
}

export default Users;