import React from 'react'
import Img from 'react-image';
import defaultAvatar from '../images/nc-knews-default-avatar.png';
import { loadingIcon } from '../utils/utils';

const User = ({ user, fetchUser, isLoading }) => {
  return isLoading ? loadingIcon() : <li className="user" onClick={() => fetchUser(user.username)}>
    <span><h3>{user.username}</h3>
      <p>{user.name}</p></span>
    <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px" />
  </li>
};

export default User;