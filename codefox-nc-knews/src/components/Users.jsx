import React from 'react';
import User from './User';

const Users = ({ users }) => {
// avatar_url: "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg"
// name: "Tom Tickle"
// username: "tickle122"
    return <main className="users-comments-grid">
        <p className="users-comments-search">search user</p>
        <p className="users-comments-info">user info box</p>
        <ul className="users-comments-list">
        {users.map(user => {
            return <User key={user.username} user={user} />
        })}
        </ul>
    </main>
}

export default Users;