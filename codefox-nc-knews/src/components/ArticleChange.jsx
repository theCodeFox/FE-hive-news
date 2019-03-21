import React, { Component } from 'react';

class ArticleChange extends Component {
  state = {
    addClicked: false,
    title: '',
    topic: 'coding',
    body: '',
  }
  render() {
    const { total_articles, topics } = this.props;
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
        </form>
        : <p>There are {total_articles} articles in total<button onClick={this.toggleAdd}>ADD</button><br />sort</p>}
    </div>
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

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

};

export default ArticleChange;