import React from "react";
import ws from "../util/ws";

export default class ChatControl extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();

    ws.emit(this.text.value);
    this.text.value = "";
  };
  render() {
    return (
      <div className="chat-message clearfix">
        <form onSubmit={this.handleFormSubmit} action="">
          <textarea
            ref={el => (this.text = el)}
            placeholder="Type your message"
            rows="4"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}
