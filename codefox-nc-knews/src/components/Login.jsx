import React, { Component } from 'react';

class Login extends Component {
  // state = {

  // }
  // render() {
  //   const { user, userAvatar, addUser } = this.props;
  //   return <main>
  //     <div className="users-comments-search">
  //       {addClicked
  //         ? <form action="post" onSubmit={this.handleUserSubmit}>
  //           <label htmlFor="username">Username:</label>
  //           <input type="text" id="username" name="username" onChange={this.handleUserChange} value={username} required />
  //           <label htmlFor="avatar_url">Avatar URL:</label>
  //           <input type="text" id="avatar_url" name="avatar_url" onChange={this.handleUserChange} value={avatar_url} required />
  //           <label htmlFor="name">Name:</label>
  //           <input type="text" id="name" name="name" onChange={this.handleUserChange} value={name} required />
  //           <br />
  //           <button>SUBMIT</button>
  //         </form>
  //         : <p>There are {users.length} users <button onClick={this.toggleAdd}>ADD</button></p>}
  //     </div>
  //   </main>
  // }

  // handleUserChange = (event) => {
  //   event.persist()
  //   const newUserData = event.target.value;
  //   const userDataKey = event.target.id;
  //   this.setState({ [userDataKey]: newUserData })
  // }

  // handleUserSubmit = (event) => {
  //   event.preventDefault();
  //   const { username, avatar_url, name } = this.state
  //   this.props.addUser(username, avatar_url, name);
  //   this.setState({
  //     addClicked: false,
  //     username: '',
  //     avatar_url: '',
  //     name: ''
  //   })
  // }

  // toggleAdd = () => {
  //   !this.state.addClicked && this.setState({ addClicked: true })
  // }

};

export default Login;