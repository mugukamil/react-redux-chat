import React from "react";
import ws from "../util/ws";

export default Child =>
  class AuthHOC extends React.Component {
    auth() {
      let userName = localStorage.getItem("auth");
      if (!userName) {
        userName = prompt("Enter your name");
        if (!userName || !userName.trim().length) {
          return false;
        }
      }

      localStorage.setItem("auth", userName);
      ws.emit(userName);

      return userName;
    }

    noName() {
      return (
        <div>
          You didn't enter the name
          <button onClick={() => window.location.reload()}>Try again?</button>
        </div>
      );
    }
    render() {
      return this.auth() ? <Child /> : this.noName();
    }
  };
