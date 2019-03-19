import React from 'react'
import Img from 'react-image';
import defaultAvatar from '../images/nc-knews-default-avatar.png'
import RelatedArticle from './RelatedArticle';

const SelectedUser = ({ user, articles, removeArticle }) => {
  return user
    ? (
    <div className="user-info">
    <span>
      <h3>Username: {user.username}</h3>
      <p>Name: {user.name}</p>
    </span>
    <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px"/>
    <div>
      <h3>Related Articles</h3>
      <div>{articles.map(article => {
        return <RelatedArticle key={`related-article-${article.article_id}`} article={article} removeArticle={removeArticle} />
      })}</div>
      {/* look at adding functionality to back-end to make this work without sending thousands of requests to browser
      <h3>Related Comments</h3>
      <p>comments list</p> */}
    </div>
    </div>
    )
    : "Please click on user for more information"
};

export default SelectedUser;