import React, { Component } from 'react';
import { navigate } from '@reach/router';
import {
  fetchArticleByID,
  fetchCommentsByArticleID,
  patchVote,
  postComment,
  fetchFilteredComments,
  deleteComment,
} from '../utils/app-utils';
import ArticleComment from './ArticleComment';
import {
  voteHeart,
  formatDateTime,
  votingButtons,
  deleteImage,
  cancelImage,
  submitImage,
  addImage,
  rightImage,
  leftImage,
  handleError,
  loadingIcon,
} from '../utils/utils';

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    voteChange: 0,
    body: '',
    addClicked: false,
    p: 1,
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
      .catch(err => handleError(err))
  }

  render() {
    const { access, user, removeArticle } = this.props;
    const {
      article,
      comments,
      voteChange,
      body,
      addClicked,
      p
    } = this.state;
    const formattedTime = (article.created_at) && formatDateTime(article.created_at)
    return (
      <main className="article-page" data-cy={`article-page-${article.article_id}`}>
        {(article.article_id) ? <div>
          <h4>Topic: {article.topic}</h4>
          <h3>Title: {article.title}</h3>
          <h4>Author: {article.author}</h4>
          <h4 className="date-time">{formattedTime}</h4>
          <p className="article-body highlight-area">{article.body}</p>
          <h4 className="center">{voteHeart(article.votes + voteChange)} {article.votes + voteChange} votes</h4>
          {(access === 'admin' || access === 'member') && <p className="center">Tell us what you thought about the article: <br />
            {votingButtons(voteChange, this.handleVote)}
            {(access === 'admin' || user === article.author) && <button className="button-image" onClick={() => {
              removeArticle(article.article_id)
              navigate('/topics', { state: { msg: 'article deleted' } })
            }}>{deleteImage()}</button>}
          </p>}

          <h3>Comments</h3>
          {addClicked
            ? <form action="post" onSubmit={this.handleCommentSubmit}>
              <label htmlFor="comment-body">Add your comment here:</label>
              <textarea type="text" id="comment-body" name="comment-body" onChange={this.handleCommentChange} value={body} data-cy="comment-add-body" required /><br />
              <div className="center"><button className="button-image" data-cy="comment-submit">{submitImage()}</button>
                <button className="button-image" onClick={this.handleCancel}>{cancelImage()}</button></div>
            </form>
            : <div>{(access === 'admin' || access === 'member') && <button className="button-image" onClick={this.toggleAdd} data-cy="comment-add">{addImage()}</button>}
              <div className="right"><label htmlFor="comment-sort">Sort:</label>
                <select id="comment-sort" onChange={(event) => {
                  this.sortComments('sort_by', event.target.value)
                }}>
                  <option value="created_at-desc">Newest</option>
                  <option value="created_at-asc">Oldest</option>
                  <option value="votes-desc">Most Loved</option>
                  <option value="votes-asc">Most Hated</option>
                  <option value="author-asc">Author (a-z)</option>
                  <option value="author-desc">Author (z-a)</option>
                </select></div>
              <p className="center"><button className="button-image" onClick={() => this.changeCommentPage(-1)}>{leftImage()}{leftImage()}{leftImage()}</button>
                page {p}
                <button className="button-image" onClick={() => this.changeCommentPage(1)}>{rightImage()}{rightImage()}{rightImage()}</button>
              </p>
            </div>}
          <ul>{comments.map(comment => {
            return <ArticleComment
              key={comment.comment_id}
              access={access}
              user={user}
              comment={comment}
              removeComment={this.removeComment}
            />
          })}</ul></div> : loadingIcon()}
      </main>
    )
  }

  changeCommentPage = (pageChange) => {
    const { p, article } = this.state;
    const maxPage = Math.ceil(article.comment_count / 10);
    let newPage = p + pageChange;
    if (newPage > maxPage) newPage = 1;
    if (newPage === 0) newPage = maxPage;
    const id = this.state.article.article_id;
    const query = { p: newPage }
    fetchFilteredComments(id, query)
      .then(newComments => {
        this.setState({
          comments: newComments,
          p: newPage,
        })
      })
      .catch(err => handleError(err))
  }

  sortComments = (commentDataKey, sortData) => {
    const sortOrders = sortData.split('-');
    const query = {
      [commentDataKey]: sortOrders[0],
      order: sortOrders[1]
    };
    const id = this.state.article.article_id;
    fetchFilteredComments(id, query)
      .then(newComments => {
        this.setState({ comments: newComments, p: 1 })
      })
      .catch(err => handleError(err))
  }

  addComment = (body) => {
    const { article } = this.state;
    const id = article.article_id;
    const username = this.props.user;
    postComment(id, username, body)
      .then(newComment => {
        this.setState(prevState => {
          const formattedComments = [newComment, ...prevState.comments];
          return { comments: formattedComments }
        })
      })
      .catch(err => handleError(err))
  }

  handleCancel = () => {
    this.state.addClicked && this.setState({ addClicked: false })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

  handleCommentChange = (event) => {
    event.persist();
    const newCommentData = event.target.value;
    this.setState({ body: newCommentData })
  }

  handleCommentSubmit = (event) => {
    event.preventDefault();
    const { body } = this.state;
    this.addComment(body);
    this.setState({
      addClicked: false,
      body: '',
    })
  }

  handleVote = (voteChange) => {
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteChange
    }))
    patchVote(voteChange, 'articles', this.state.article.article_id)
  }

  removeComment = (comment_id) => {
    const newComments = this.state.comments.filter(comment => comment.comment_id !== comment_id)
    deleteComment(comment_id)
      .then(() => {
        this.setState({
          comments: newComments
        })
      })
      .catch(err => handleError(err))
  }
};

export default ArticlePage;