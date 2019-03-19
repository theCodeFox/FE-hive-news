import React from 'react';

const Topic = ({ topic }) => {
  return <li className="topic">
    <h3>{topic.slug}</h3>
    <p>{topic.description}</p>
    </li>
}

export default Topic;