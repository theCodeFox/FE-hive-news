import React from 'react';
import { formatDateTime } from '../utils/app-utils';

const ArticleComment = ({ comment, removeComment }) => {
    const formattedDateTime = formatDateTime(comment.created_at)
    return <ul className="list-item2" key={`user-${comment.article_id}`}>
      <h4>Article ID: {comment.article_id}</h4>
      <p>Author: {comment.author}</p>
      <p>{formattedDateTime}</p>
      <p>Votes: {comment.votes}</p>
      <p className="comment-body">{comment.body}</p>
      <button className="delete" onClick={() => removeComment(comment.comment_id)}>DELETE</button>
    </ul>
};

export default ArticleComment;