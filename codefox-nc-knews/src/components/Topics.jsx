import React, { Component } from 'react';
import Topic from './Topic';
import Article from './Article';

class Topics extends Component {
  state = {
    addClicked: false
  }
  render() {
    const { topics, articles, filterArticles, total_articles } = this.props;
    const { addClicked } = this.state;
    return <main className="topic-article-grid">
      <div className="topic-article-changeTopic">
        <p>There are {topics.length} topics in total <button onClick={() => this.toggleAdd()}>ADD</button></p>
        {addClicked && <form action="post">
          <label htmlFor="slug">Topic Slug:</label>
          <input type="text" id="slug" required/>
          <br />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" required/>
          <button>SUBMIT</button>
        </form>}
        <p>sort</p>
      </div>
      <div className="topic-article-changeArticle">
        <p>There are {total_articles} articles in total <button>ADD</button></p>
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

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

}

export default Topics;