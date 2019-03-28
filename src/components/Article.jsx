import React from 'react';
import {
  formatDateTime,
  voteHeart,
  viewImage,
  loadingIcon
} from '../utils/utils';
import { navigate } from '@reach/router';

const Article = ({ article, isLoading }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return isLoading ? loadingIcon() : <li className="list-item highlight-area">
    <h3>{article.title}</h3>
    <p>Author: {article.author}</p>
    <p className="date-time">{formattedDateTime}</p>
    <p className="comment-spacing">{article.comment_count} Comments</p>
    <p>{voteHeart(article.votes)} {article.votes} votes
    <button className="button-image" onClick={() => {
        navigate(`/articles/${article.article_id}`, { state: { msg: 'article requested' } })
      }}>{viewImage()}</button></p>
  </li>
}

export default Article;