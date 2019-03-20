import React from 'react';
import { formatDateTime } from '../utils/app-utils';
import { navigate } from '@reach/router';

const Article = ({ article }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return <li className="list-item">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{formattedDateTime}</p>
      <p>Votes: {article.votes}</p>
      <button className="view" onClick={() => {
      navigate(`/articles/${article.article_id}`, { state: { msg: 'article requested' }})
    }}>VIEW</button>
    </li>
}

export default Article;