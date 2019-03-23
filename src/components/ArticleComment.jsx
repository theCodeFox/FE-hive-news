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
    return <ul className="list-item highlight-area" key={`user-${comment.article_id}`}>
      <div className="article-comment">Author: {comment.author}
        <br />
        <p className="date-time">{formattedDateTime}</p>
        <br />
        <p className="comment-body">{comment.body}</p>
        <p>{voteHeart(comment.votes + voteChange)} {comment.votes + voteChange} votes</p>
        {(access === 'admin' || access === 'member') &&
          <p>Tell us what you thought about the comment: <br />
            {votingButtons(voteChange, this.handleVote)}
            {(access === 'admin' || user === comment.author) && <button className="button-image" onClick={() => removeComment(comment.comment_id)}>{deleteImage()}</button>}
          </p>}
      </div>
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