import React from 'react';

const Topic = ({ topic, filterArticles }) => {
  return <li className="list-item">
    <h3>{topic.slug}</h3>
    <p>{topic.description}</p>
    <button className="view" onClick={() => {
      filterArticles({ topic: topic.slug })
    }}>FILTER</button>
    </li>
}

export default Topic;