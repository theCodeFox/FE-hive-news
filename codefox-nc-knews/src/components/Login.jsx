import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    avatar_url: '',
    name: '',
    addClicked: false,
  }
  render() {
    const { user, userAvatar, addUser, logOut } = this.props;
    const { username, avatar_url, name, addClicked } = this.state;
    return <main>
      <div className="users-comments-search">
        {addClicked
          ? <form action="post" onSubmit={this.handleUserSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={this.handleUserChange} value={username} required />
            <label htmlFor="avatar_url">Avatar URL:</label>
            <input type="text" id="avatar_url" name="avatar_url" onChange={this.handleUserChange} value={avatar_url} required />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={this.handleUserChange} value={name} required />
            <br />
            <button>SUBMIT</button>
          </form>
          : <div>
            <h3>Hello {user}!</h3>
            <p>Not you? Then please type your username below or simply <button onClick={logOut}>LOGOUT</button></p>
            <p>Or if you don't have a username then why not join us. Then you can create your own articles as well as comment and vote!</p>
            <button onClick={this.toggleAdd}>JOIN</button>
          </div>}
      </div>
    </main>
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