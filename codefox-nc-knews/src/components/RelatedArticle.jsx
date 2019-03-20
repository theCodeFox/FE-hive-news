import React from 'react'
import { formatDateTime } from '../utils/app-utils';
import { navigate } from '@reach/router';

const RelatedArticle = ({ article, removeArticle }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return <div className="list-item2" key={`user-${article.article_id}`}>
    <h4>{article.title}</h4>
    <p>Author: {article.author}</p>
    <p>{formattedDateTime}</p>
    <p>Votes: {article.votes}</p>
    <button className="view" onClick={() => {
      navigate(`/articles/${article.article_id}`, { state: { msg: 'article requested' }})
    }}>VIEW</button>
    <button className="delete" onClick={() => removeArticle(article.article_id)}>DELETE</button>
  </div>
}

export default RelatedArticle;