import React, { Component } from 'react';
import Topic from './Topic';
import Article from './Article';

class Topics extends Component {
  state = {
    addClicked: false,
    slug: '',
    description: '',
  }
  render() {
    const { topics, articles, filterArticles, total_articles } = this.props;
    const { addClicked, slug, description } = this.state;
    return <main className="topic-article-grid">
      <div className="topic-article-changeTopic">
        {addClicked
          ? <form action="post" onSubmit={this.handleTopicSubmit}>
          <label htmlFor="slug">Topic Slug:</label>
          <input type="text" id="slug" name="slug" onChange={this.handleTopicChange} value={slug} required/>
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={this.handleTopicChange} value={description} required/>
          <button>SUBMIT</button>
          </form>
        : <p>There are {topics.length} topics <button onClick={this.toggleAdd}>ADD</button><br />sort</p>}
      </div>
      <div className="topic-article-changeArticle">
        <p>There are {total_articles} articles <button>ADD</button></p>
        <p>sort</p>
      </div>
      <ul className="topic-article-topics">{topics.map(topic => {
        return <Topic
          key={topic.slug}
          topic={topic}
          filterArticles={filterArticles}
        />
      })}</ul>
      <ul className="topic-article-articles">{articles.map(article => {
        return <Article
          key={article.article_id}
          article={article}
        />
      })}</ul>
    </main>
  }

  handleTopicChange = (event) => {
    event.persist()
    const newTopicData = event.target.value;
    const topicDataKey = event.target.id;
    this.setState({ [topicDataKey]: newTopicData })
  }

  handleTopicSubmit = (event) => {
    event.preventDefault();
    const { slug, description } = this.state
    this.props.addTopic(slug, description);
    this.setState({
      addClicked: false,
      slug: '',
      description: ''
    })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

}

export default Topics;