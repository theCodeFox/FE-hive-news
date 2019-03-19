import React from 'react';
import { formatDateTime } from '../utils/articles';

const Article = ({ article }) => {
  const formattedDateTime = formatDateTime(article.created_at)
  return <li className="article">
    <h3>{article.title}</h3>
    <p>Author: {article.author}</p>
      <p>{formattedDateTime}</p>
      <p>Votes: {article.votes}</p>
    </li>
}

export default Article;