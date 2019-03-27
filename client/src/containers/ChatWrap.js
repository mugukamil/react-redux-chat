import React, { Component } from "react";
import PeopleList from "../containers/PeopleList";
import MessageList from "../containers/MessagesList";
import AuthHOC from "./AuthHoc";

class ChatWrap extends Component {
  render() {
    return (
      <>
        <PeopleList />
        <MessageList />
      </>
    );
  }
}
export default AuthHOC(ChatWrap);
