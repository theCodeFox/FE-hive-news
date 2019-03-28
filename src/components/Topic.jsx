import React from 'react';
import { filterImage } from '../utils/utils';

const Topic = ({ topic, filterArticles }) => {
  return <li className="list-item highlight-area">
    <h3>{topic.slug}</h3>
    <p>{topic.description}</p>
    <button className="button-image" onClick={() => {
      filterArticles({ topic: topic.slug })
    }}>{filterImage()}</button>
  </li>
}

export default Topic;