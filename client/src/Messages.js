import React, { Component } from "react";

export default class Messages extends Component {
  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.addNewMessage("@chris001", +Date.now(), this.input.value);
    this.input.value = "";
  };
  render() {
    return (
      <div className="chat">
        <form action="#" onSubmit={this.handleFormSubmit}>
          {this.props.messages.map(m => {
            const d = new Date(m.datetime);
            return (
              <div className="message" key={m.datetime}>
                <span className="message__date">{`${d.getDate()}/${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`}</span>
                <span className="message__author">{m.author}</span>
                <span>{m.text}</span>
              </div>
            );
          })}

          <input
            ref={input => (this.input = input)}
            type="text"
            className="chat__input"
          />
        </form>
      </div>
    );
  }
}
