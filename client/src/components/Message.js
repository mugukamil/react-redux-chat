import React from "react";

export default props => (
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{props.time}</span>
      <span className="message-data-name">{props.author}</span>
      <i className="fa fa-circle me" />
    </div>
    <div
      style={{ background: props.color }}
      className="message other-message float-right"
    >
      {props.text}
    </div>
  </li>
);
