import React from 'react';
import Topic from './Topic';

const Topics = ({ topics, articles }) => {
    return <main className="main-grid">
        <p className="main-changeTopic">change topic</p>
        <p className="main-changeArticle">change article</p>
        <ul className="main-topics">{topics.map(topic => {
            return <Topic key={topic.slug} topic={topic} />
        })}</ul>
        <p className="main-articles">articles</p>
    </main>
}

export default Topics;