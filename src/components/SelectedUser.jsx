import React, { Component } from 'react'
import Img from 'react-image';
import defaultAvatar from '../images/nc-knews-default-avatar.png'
import RelatedArticle from './RelatedArticle';
import RelatedComment from './RelatedComment';

class SelectedUser extends Component {
  render() {
    const {
      user,
      articles,
      comments,
      removeArticle,
      removeComment,
    } = this.props;
    return user
      ? (
        <div className="user-info">
          <span>
            <h3>Username: {user.username}</h3>
            <p>Name: {user.name}</p>
          </span>
          <Img src={[user.avatar_url, defaultAvatar]} alt={`${user.username}'s avatar`} height="30px" width="30px" />
          <div>
            <h3>Related Articles</h3>
            <div>{articles.map(article => {
              return <RelatedArticle
                key={`related-article-${article.article_id}`}
                article={article}
                removeArticle={removeArticle}
              />
            })}</div>
            <h3>Related Comments</h3>
            <div>{comments.map(comment => {
              return <RelatedComment
                key={`related-comment-${comment.comment_id}`}
                comment={comment}
                removeComment={removeComment}
              />
            })}</div>
          </div>
        </div>
      )
      : "Please click on user for more information"
  }
};

export default SelectedUser;