import constants from "../constants";

export const connectedNewUser = ({ userName, userID }) => ({
  type: constants.CONNECTED_NEW_USER,
  userName,
  userID
});

export const disconnectedUser = ({ userID }) => ({
  type: constants.DISCONNECTED_USER,
  userID
});

export const newMessage = ({ author, text, time, color }) => ({
  type: constants.NEW_MESSAGE,
  author,
  text,
  time,
  color
});
