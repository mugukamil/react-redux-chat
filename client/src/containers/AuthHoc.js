import React from "react";
import ws from "../util/ws";

export default Child =>
  class AuthHOC extends React.Component {
    auth() {
      if (localStorage.getItem("auth")) return true;
      let name = prompt("Enter your name");
      if (!name || !name.trim().length) {
        return false;
      }

      localStorage.setItem("auth", name);
      ws.emit(name);

      return name;
    }

    noName() {
      return (
        <div>
          You didn't enter the name{" "}
          <button onClick={() => window.location.reload()}>Try again?</button>
        </div>
      );
    }
    render() {
      return this.auth() ? <Child /> : this.noName();
    }
  };
