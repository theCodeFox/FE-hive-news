import React, { Component } from 'react';
import { submitImage, joinImage, logoutImage } from '../utils/app-utils';

class Login extends Component {
  state = {
    loggedInUser: '',
    username: '',
    avatar_url: '',
    name: '',
    addClicked: false,
    isInvalid: false,
  }
  render() {
    const { user, logOut } = this.props;
    const {
      username,
      avatar_url,
      name,
      addClicked,
      loggedInUser,
      isInvalid,
    } = this.state;
    return <main>
      <div className="main-login">
        {addClicked
          ? <form action="post" onSubmit={this.handleUserSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={this.handleUserChange} value={username} required />
            <label htmlFor="avatar_url">Avatar URL:</label>
            <input type="text" id="avatar_url" name="avatar_url" onChange={this.handleUserChange} value={avatar_url} required />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={this.handleUserChange} value={name} required />
            <br />
            <button className="button-image">{submitImage()}</button>
          </form>
          : <div>
            <h3>Hello {user}!</h3>
            <p>Not you? Then please type your username below or simply <button className="button-image" onClick={logOut}>{logoutImage()}</button></p>
            <form action="post">
              <label htmlFor="login">Login:</label>
              <input type="text" id="login" value={loggedInUser} onChange={this.handleLoginChange} required />
              <button className="button-image" onClick={this.handleLoginSubmit}>{submitImage()}</button>
            </form>
            {isInvalid && <p>Invalid Username, please try again</p>}
            <p>Or if you don't have a username then why not join us. Then you can create your own articles as well as comment and vote!</p>
            <button className="button-image" onClick={this.toggleAdd}>{joinImage()}</button>
          </div>}
      </div>
    </main>
  }

  handleLoginChange = (event) => {
    event.persist();
    const newUser = event.target.value;
    this.setState({ loggedInUser: newUser })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { loggedInUser } = this.state;
    const userCheck = this.props.users.filter(user => user.username === loggedInUser)
    if (userCheck.length === 0) this.setState({ isInvalid: true })
    else {
      const avatar_url = userCheck[0].avatar_url;
      this.props.changeUser(loggedInUser, avatar_url);
      this.setState({
        loggedInUser: '',
        isInvalid: false,
      })
    }
  }

  handleUserChange = (event) => {
    event.persist()
    const newUserData = event.target.value;
    const userDataKey = event.target.id;
    this.setState({ [userDataKey]: newUserData })
  }

  handleUserSubmit = (event) => {
    event.preventDefault();
    const { username, avatar_url, name } = this.state
    this.props.addUser(username, avatar_url, name);
    this.props.changeUser(username, avatar_url);
    this.setState({
      addClicked: false,
      username: '',
      avatar_url: '',
      name: ''
    })
  }

  toggleAdd = () => {
    !this.state.addClicked && this.setState({ addClicked: true })
  }

};

export default Login;