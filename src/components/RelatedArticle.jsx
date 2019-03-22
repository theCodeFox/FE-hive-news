import React from 'react'
import { formatDateTime, voteHeart, deleteImage, viewImage } from '../utils/app-utils';
import { navigate } from '@reach/router';

const RelatedArticle = ({ article, removeArticle }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return <div className="list-item2" key={`user-${article.article_id}`}>
    <h4>{article.title}</h4>
    <p>Author: {article.author}</p>
    <p>{formattedDateTime}</p>
    <p>{voteHeart(article.votes)} {article.votes}</p>
    <button className="button-image" onClick={() => {
      navigate(`/articles/${article.article_id}`, { state: { msg: 'article requested' } })
    }}>{viewImage()}</button>
    <button className="button-image" onClick={() => removeArticle(article.article_id)}>{deleteImage()}</button>
  </div>
}

export default RelatedArticle;