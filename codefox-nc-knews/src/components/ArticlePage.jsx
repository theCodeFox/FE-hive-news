import React, { Component } from 'react';
import { fetchArticleByID } from '../utils/app-utils';
import { formatDateTime, fetchCommentsByArticleID } from '../utils/app-utils';
import ArticleComment from './ArticleComment';
import { deleteComment } from '../utils/users';

class ArticlePage extends Component {
  state = {
    article: [],
    comments: []
  }

  componentDidMount = () => {
    const id = this.props.article_id;
    const article = fetchArticleByID(id);
    const comments = fetchCommentsByArticleID(id);
    return Promise.all([article, comments])
      .then(([article, comments]) => {
          return this.setState({
            article: article.data.article,
            comments: comments.data.comments
          })
      })
  }

  render() {
    const { removeArticle } = this.props;
    const { article, comments } = this.state;
    const formattedTime = (article.created_at) && formatDateTime(article.created_at)
    return (
      <main>
        <h4>Topic: {article.topic}</h4>
        <h3>Title: {article.title}</h3>
        <h4>Author: {article.author}</h4>
        <h4>{formattedTime}</h4>
        <h4>Votes: {article.votes}</h4>
        <p>{article.body}</p>
        <button className="delete" onClick={() => removeArticle(article.article_id)}>DELETE</button>
        <h3>Comments {article.comment_count}</h3>
        <button>ADD</button>
        <ul>{comments.map(comment => {
          return <ArticleComment
            key={comment.comment_id}
            comment={comment}
            removeComment={this.removeComment}
          />
        })}</ul>
      </main>
    )
  }

  removeComment = (comment_id) => {
    const newComments = this.state.comments.filter(comment => comment.comment_id !== comment_id)
    deleteComment(comment_id)
      .then(() => {
        this.setState({
          comments: newComments
        })
    })
  }
};

export default ArticlePage;