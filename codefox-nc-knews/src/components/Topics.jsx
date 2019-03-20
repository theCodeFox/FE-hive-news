import React from 'react';
import Topic from './Topic';
import Article from './Article';

const Topics = ({ topics, articles, filterArticles }) => {
    return <main className="topic-article-grid">
        <p className="topic-article-changeTopic">change topic</p>
        <p className="topic-article-changeArticle">change article</p>
        <ul className="topic-article-topics">{topics.map(topic => {
            return <Topic
              key={topic.slug}
              topic={topic}
              filterArticles={filterArticles}
            />
        })}</ul>
        <ul className="topic-article-articles">{articles.map(article => {
            return <Article key={article.article_id} article={article} />
        })}</ul>
    </main>
}

export default Topics;