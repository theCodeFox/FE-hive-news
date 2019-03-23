import React from 'react'
import { formatDateTime, voteHeart, viewImage } from '../utils/app-utils';
import { navigate } from '@reach/router';
import { deleteImage } from '../utils/app-utils'

const RelatedComment = ({ comment, removeComment }) => {
  const formattedDateTime = formatDateTime(comment.created_at)
  return <div className="list-item2" key={`user-${comment.article_id}`}>
    <h4>Article ID: {comment.article_id}</h4>
    <p className="date-time">{formattedDateTime}</p>
    <p className="comment-body">{comment.body}</p>
    <p>{voteHeart(comment.votes)}{comment.votes}
      <button
        className="button-image"
        onClick={() => {
          navigate(`/articles/${comment.article_id}`, { state: { msg: 'article that comment belongs to' } })
        }}
      >{viewImage()}</button>
      <button className="button-image" onClick={() => removeComment(comment.comment_id)}>{deleteImage()}</button></p>
  </div>
}

export default RelatedComment;