import React from "react";
import ChatHeader from "../components/ChatHeader";
import Message from "../components/Message";
import { connect } from "react-redux";
import ChatControl from "../components/ChatControl";

class MessageList extends React.Component {
  componentDidUpdate() {
    this.chatWrap.scrollTop = this.ul.scrollHeight;
  }

  render() {
    return (
      <div className="chat">
        <ChatHeader />

        <div
          className="chat-history"
          ref={chatWrap => (this.chatWrap = chatWrap)}
        >
          <ul ref={ul => (this.ul = ul)}>
            {this.props.messages.map(m => (
              <Message key={m.time} {...m} />
            ))}
          </ul>
        </div>

        <ChatControl />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer
  };
};

export default connect(mapStateToProps)(MessageList);
