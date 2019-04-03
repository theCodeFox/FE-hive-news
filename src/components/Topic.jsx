import React from 'react';
import { filterImage } from '../utils/utils';

const Topic = ({ topic, filterArticles }) => {
  return <li className="list-item highlight-area" data-cy={topic.slug}>
    <h3>{topic.slug}</h3>
    <p>{topic.description}</p>
    <button className="button-image" onClick={() => {
      filterArticles({ topic: topic.slug })
    }} data-cy={topic.slug}>{filterImage()}</button>
  </li>
}

export default Topic;