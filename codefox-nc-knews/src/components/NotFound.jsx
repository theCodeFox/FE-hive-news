import React from 'react';

const NotFound = (props) => {
  return <p>{(props.location && props.location.state && props.location.state.msg) || 'page not found'}</p>
};

export default NotFound