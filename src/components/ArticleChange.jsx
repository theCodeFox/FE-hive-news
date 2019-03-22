import React, { Component } from 'react';

class ArticleChange extends Component {
  state = {
    addClicked: false,
    title: '',
    topic: 'coding',
    body: '',
    p: 1
  }
  render() {
    const { access, total_articles, topics, changeArticlePage, p } = this.props;
    const { addClicked, title, topic, body } = this.state;
    return <div className="topic-article-changeArticle">
      {addClicked
        ? <form action="post" onSubmit={this.handleArticleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" onChange={(event) => this.handleArticleChange('title', event.target.value)} value={title} required />
          <br />
          <select onChange={(event) => this.handleArticleChange('topic', event.target.value)}>
            {topics.map(topicOption => <option defaultValue={topicOption === topic} value={topicOption.slug} key={topicOption.slug}>{topicOption.slug}</option>)}
          </select>
          <br />
          <label htmlFor="body">Body:</label>
          <input
            type="text" name="body" onChange={(event) => this.handleArticleChange('body', event.target.value)} value={body} required />
          <button>SUBMIT</button>
          <button className="delete" onClick={this.handleCancel}>CANCEL</button>
        </form>
        : <p>There are {total_articles} articles in total {(access === 'admin' || access === 'member') && <button onClick={this.toggleAdd}>ADD</button>}<br /><label htmlFor="comment-sort">Sort Comments:</label>
          <select id="comment-sort" onChange={(event) => {
            this.sortArticles('sort_by', event.target.value)
          }}>
            <option value="created_at-desc">Newest</option>
            <option value="created_at-asc">Oldest</option>
            <option value="votes-desc">Most Loved</option>
            <option value="votes-asc">Most Hated</option>
            <option value="author-asc">Author (a-z)</option>
            <option value="author-desc">Author (z-a)</option>
          </select>
          <br />
          <button onClick={() => changeArticlePage(-1)}>BACK</button>
          page {p}
          <button onClick={() => changeArticlePage(1)}>NEXT</button>
        </p>}
    </div>
  }

  sortArticles = (articleDataKey, sortData) => {
    const sortOrders = sortData.split('-');
    const query = {
      [articleDataKey]: sortOrders[0],
      order: sortOrders[1],
    };
    this.props.filterArticles(query)
  }

  handleArticleChange = (articleDataKey, newArticleData) => {
    this.setState({ [articleDataKey]: newArticleData })
  }

  handleArticleSubmit = (event) => {
    event.preventDefault();
    const { title, topic, body } = this.state
    this.props.addArticle(title, topic, body);
    this.setState({
      addClicked: false,
      title: '',
      topic: 'coding',
      body: '',
    })
  }

  handleCancel = () => {
    this.state.addClicked && this.setState({ addClicked: false })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

};

export default ArticleChange;