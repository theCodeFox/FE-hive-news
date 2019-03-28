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
  isLoading
}) => {
  return <main className="topic-article-grid">
    <div className="topic-article-topics">
      <TopicChange
        access={access}
        topics={topics}
        addTopic={addTopic}
      />
      <ul>
        {topics.map(topic => {
          return <Topic
            key={topic.slug}
            topic={topic}
            filterArticles={filterArticles}
            isLoading={isLoading}
          />
        })}</ul>
    </div>
    <div className="topic-article-articles">
      <ArticleChange
        access={access}
        total_articles={total_articles}
        addArticle={addArticle}
        topics={topics}
        filterArticles={filterArticles}
        changeArticlePage={changeArticlePage}
        p={p}
      />
      <ul>{articles.map(article => {
        return <Article
          key={article.article_id}
          article={article}
          isLoading={isLoading}
        />
      })}</ul>
    </div>
  </main>
}

export default Topics;