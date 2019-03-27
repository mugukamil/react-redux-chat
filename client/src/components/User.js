import React from "react";

export default ({ userName }) => (
  <li className="clearfix">
    <img
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
      alt="avatar"
    />
    <div className="about">
      <div className="name">{userName}</div>
      <div className="status">
        <i className="fa fa-circle online" /> online
      </div>
    </div>
  </li>
);
