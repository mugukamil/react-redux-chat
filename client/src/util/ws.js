import { connectedNewUser, disconnectedUser } from "../actions";
import store from "../store";

export default (wsUrl => {
  let ws = new WebSocket(wsUrl);
  const { dispatch } = store;

  ws.onopen = () => {
    console.log("ws open");
  };

  ws.onmessage = ({ data }) => {
    const messageObj = JSON.parse(data);

    console.log(messageObj);

    const { userId, userName } = messageObj;
    switch (messageObj.type) {
      case "connected_new_user":
        dispatch(connectedNewUser(messageObj.userName, messageObj.userId));
        break;
      case "disconnected_user":
        dispatch(disconnectedUser(messageObj.userId));
        break;
    }
  };

  let countReconnect = 0;
  const emit = message => {
    if (countReconnect > 5) return;
    if (ws.readyState === ws.CONNECTING) {
      setTimeout(() => {
        emit(message);
        countReconnect++;
      }, 500);
      return;
    }
    ws.send(message);
    countReconnect = 0;
  };

  return { emit };
})("ws://localhost:4000");
