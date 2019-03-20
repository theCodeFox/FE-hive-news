import React from 'react'
import { formatDateTime } from '../utils/app-utils';
import { navigate } from '@reach/router'

const RelatedComment = ({ comment, removeComment }) => {
  const formattedDateTime = formatDateTime(comment.created_at)
  return <div className="list-item2" key={`user-${comment.article_id}`}>
    <h4>Article ID: {comment.article_id}</h4>
    <p>Author: {comment.author}</p>
    <p>{formattedDateTime}</p>
    <p>Votes: {comment.votes}</p>
    <p className="comment-body">{comment.body}</p>
    <button
    className="view"
    onClick={() => {
      navigate(`/articles/${comment.article_id}`, { state: { msg: 'article that comment belongs to' }})
    }}
    >
      VIEW
    </button>
    <button className="delete" onClick={() => removeComment(comment.comment_id)}>DELETE</button>
  </div>
}

export default RelatedComment;