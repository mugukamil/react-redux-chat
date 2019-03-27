import React, { Component } from "react";

export default class Users extends Component {
  render() {
    return (
      <div className="users">
        <h3 className="users__title">Online Users</h3>
        <ul>
          {this.props.users.map(u => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <button onClick={this.props.addNewUser}>Add New User</button>
      </div>
    );
  }
}
