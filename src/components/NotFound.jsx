import React from 'react';

const NotFound = (props) => {
  return <main className="home-grid">
    <div className="home-intro center home">
      <div className="highlight-area intro">
        <h3>Status: {null || "404"}</h3>
        <p className="comment-body intro">
          {(props.location && props.location.state && props.location.state.msg) || 'Sorry! Page not found'}
        </p>
      </div>
    </div>
    <div className="home-img">
      <img
        src={require('../images/beehive-home.png')}
        alt="bee hive"
        className="beehive"
      />
    </div>
  </main>
};

export default NotFound;