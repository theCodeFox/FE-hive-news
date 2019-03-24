import React from 'react';

const Home = () => {
  return <main className="home-grid">
    <div className="home-intro center home">
      <div className="highlight-area intro"><h3>Hello and welcome to theCodeFox-Knews!</h3>
        <p className="comment-body intro">
          This is a study project used to learn React, Reach Router, JS, HTML and CSS. Not only has it bee a hive of information to myself but I also hope that you find the articles interesting too.
        <br />
          To change login and see the different access', please click on the user link in the top navigation bar. To view the README and code (including testing) please use the footer links.</p>
        <h4 className="intro">Most importantly, I hope you enjoy this mini project!</h4>
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
}

export default Home;
