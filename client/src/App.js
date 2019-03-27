import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import Chat from "./components/Chat";
import store from "./store";
import ws from "./util/ws";

class App extends Component {
  render() {
    localStorage.removeItem("auth");
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  }
}

export default App;
