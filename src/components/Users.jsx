import React, { Component } from 'react';
import User from './User';
import {
  getUserByUsername,
  getRelatedUserArticles,
  getRelatedUserComments,
  deleteComment
} from '../utils/users';
import SelectedUser from './SelectedUser';
import {
  cancelImage,
  submitImage,
  addImage,
  handleError
} from '../utils/app-utils';

class Users extends Component {
  state = {
    selectedUser: '',
    relatedArticles: [],
    relatedComments: [],
    username: '',
    avatar_url: '',
    name: '',
    addClicked: false,
  }

  render() {
    const { users, removeArticle } = this.props;
    const { selectedUser, relatedArticles, relatedComments, username, avatar_url, name, addClicked } = this.state;
    return <main className="users-comments-grid">
      <div className="users-comments-info">
        <div className="user-add">
          {addClicked
            ? <div><form className="search-form" action="post" onSubmit={this.handleUserSubmit}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" onChange={this.handleUserChange} value={username} required />
              <br />
              <label htmlFor="avatar_url">Avatar URL:</label>
              <input type="text" id="avatar_url" name="avatar_url" onChange={this.handleUserChange} value={avatar_url} required />
              <br />
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={this.handleUserChange} value={name} required />
            </form>
              <button className="button-image">{submitImage()}</button>
              <button className="button-image" onClick={this.handleCancel}>{cancelImage()}</button>
            </div>
            : <p>There are {users.length} users
            <br />
              <button className="button-image" onClick={this.toggleAdd}>{addImage()}</button></p>}
        </div>
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
      .catch(err => handleError(err))
  }

  removeComment = (comment_id) => {
    const newComments = this.state.relatedComments.filter(comment => comment.comment_id !== comment_id)
    deleteComment(comment_id)
      .then(() => {
        this.setState({
          relatedComments: newComments
        })
      })
      .catch(err => handleError(err))
  }

  handleUserChange = (event) => {
    event.persist()
    const newUserData = event.target.value;
    const userDataKey = event.target.id;
    this.setState({ [userDataKey]: newUserData })
  }

  handleUserSubmit = (event) => {
    event.preventDefault();
    const { username, avatar_url, name } = this.state
    this.props.addUser(username, avatar_url, name);
    this.setState({
      addClicked: false,
      username: '',
      avatar_url: '',
      name: ''
    })
  }

  handleCancel = () => {
    this.state.addClicked && this.setState({ addClicked: false })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

}

export default Users;

