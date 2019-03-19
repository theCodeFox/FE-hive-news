import React from 'react'
import Img from 'react-image';

const User = ({ user }) => {
    const defaultAvatar = 'https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png'
  return <li className="user">
    <span><h3>{user.username}</h3>
    <p>{user.name}</p></span>
    <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px"/>
  </li>
};

export default User;