import React from 'react'
import Img from 'react-image';
import defaultAvatar from '../images/nc-knews-default-avatar.png'

const User = ({ user }) => {
  return <li className="user">
    <span><h3>{user.username}</h3>
    <p>{user.name}</p></span>
    <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px"/>
  </li>
};

export default User;