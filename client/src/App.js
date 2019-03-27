import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import Chat from "./components/Chat";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  }
}

export default App;
