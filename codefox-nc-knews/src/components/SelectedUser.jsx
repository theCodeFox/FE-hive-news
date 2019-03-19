import React from 'react'
import Img from 'react-image';
import defaultAvatar from '../images/nc-knews-default-avatar.png'

const SelectedUser = ({ user, articles, comments }) => {
    console.log(articles, '<-- articles')
    console.log(comments, '<-- comments')
  return user
    ? (
    <div className="user-info">
    <span>
      <h3>Username: {user.username}</h3>
      <p>Name: {user.name}</p>
    </span>
    <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px"/>
    <span>
      <h3>Related Articles</h3>
      <p>article list</p>
      <h3>Related Comments</h3>
      <p>comments list</p>
    </span>
    </div>
    )
    : "Please click on user for more information"
};

export default SelectedUser;