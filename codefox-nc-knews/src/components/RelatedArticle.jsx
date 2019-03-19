import React from 'react'
import { formatDateTime } from '../utils/articles';

const RelatedArticle = ({ article, removeArticle }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return <div className="list-item2" key={`user-${article.article_id}`}>
    <h4>{article.title}</h4>
    <p>Author: {article.author}</p>
    <p>{formattedDateTime}</p>
    <p>Votes: {article.votes}</p>
    <button onClick={() => removeArticle(article.article_id)}>DELETE</button>
  </div>
}

export default RelatedArticle;