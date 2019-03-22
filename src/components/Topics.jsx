import React from 'react';
import Topic from './Topic';
import Article from './Article';
import TopicChange from './TopicChange';
import ArticleChange from './ArticleChange';

const Topics = ({
  access,
  topics,
  articles,
  filterArticles,
  total_articles,
  addTopic,
  addArticle,
  changeArticlePage,
  p,
}) => {
  return <main className="topic-article-grid">
    <TopicChange
      access={access}
      topics={topics}
      addTopic={addTopic}
    />
    <ArticleChange
      access={access}
      total_articles={total_articles}
      addArticle={addArticle}
      topics={topics}
      filterArticles={filterArticles}
      changeArticlePage={changeArticlePage}
      p={p}
    />
    <ul className="topic-article-topics">
      {topics.map(topic => {
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

export default Topics;