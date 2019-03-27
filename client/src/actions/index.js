import constants from "../constants";

export const connectedNewUser = (userName, userId) => ({
  type: constants.CONNECTED_NEW_USER,
  userName,
  userId
});

export const disconnectedUser = userId => ({
  type: constants.DISCONNECTED_USER,
  userId
});
