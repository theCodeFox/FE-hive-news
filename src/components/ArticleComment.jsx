import React, { Component } from 'react';
import { formatDateTime, voteHeart, votingButtons, patchVote, deleteImage } from '../utils/app-utils';

class ArticleComment extends Component {
  state = {
    voteChange: 0,
  }
  render() {
    const { access, user, comment, removeComment } = this.props;
    const { voteChange } = this.state;
    const formattedDateTime = formatDateTime(comment.created_at)
    return <ul className="list-item2" key={`user-${comment.article_id}`}>
      <p>Author: {comment.author}</p>
      <p>{formattedDateTime}</p>
      <p>{voteHeart(comment.votes + voteChange)} {comment.votes + voteChange}</p>
      <p className="comment-body">{comment.body}</p>
      {(access === 'admin' || access === 'member') && <p>Tell us what you thought about the comment:
          {votingButtons(voteChange, this.handleVote)}
      </p>}
      {(access === 'admin' || user === comment.author) && <button className="button-image" onClick={() => removeComment(comment.comment_id)}>{deleteImage()}</button>}
    </ul>
  }

  handleVote = (voteChange) => {
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }))
    patchVote(voteChange, 'comments', this.props.comment.comment_id)
  }

};

export default ArticleComment;