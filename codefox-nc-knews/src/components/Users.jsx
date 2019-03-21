import React, { Component } from 'react';
import User from './User';
import {
  getUserByUsername,
  getRelatedUserArticles,
  getRelatedUserComments,
  deleteComment
} from '../utils/users';
import SelectedUser from './SelectedUser';

class Users extends Component {
  state = {
    selectedUser: '',
    relatedArticles: [],
    relatedComments: [],
    username: '',
    avatar_url: '',
    name: '',
  }
  
  render() {
    const { users, removeArticle } = this.props;
    const { selectedUser, relatedArticles, relatedComments, username, avatar_url, name } = this.state;
    return <main className="users-comments-grid">
      <p className="users-comments-search">search user</p>
      <div className="users-comments-info">
        <SelectedUser
          user={selectedUser}
          articles={relatedArticles}
          comments={relatedComments}
          removeArticle={removeArticle}
          removeComment={this.removeComment}
        /></div>
      <ul className="users-comments-list">
      {users.map(user => {
          return <User
            key={user.username}
            user={user}
            fetchUser={this.fetchUser}
          />
      })}
      </ul>
    </main>
  }

  fetchUser = (username) => {
    const { articles } = this.props;
    const fetchedUser = getUserByUsername(username);
    const fetchedRelatedArticles = getRelatedUserArticles(articles, username);
    const fetchedRelatedComments = getRelatedUserComments(username);
    return Promise.all([fetchedUser, fetchedRelatedArticles, fetchedRelatedComments])
      .then(([user, articles, comments]) => {
        this.setState({
            selectedUser: user,
            relatedArticles: articles,
            relatedComments: comments
        })
      })
  }

  removeComment = (comment_id) => {
    const newComments = this.state.relatedComments.filter(comment => comment.comment_id !== comment_id)
    deleteComment(comment_id)
      .then(() => {
        this.setState({
          relatedComments: newComments
        })
      })
  }

}

export default Users;

