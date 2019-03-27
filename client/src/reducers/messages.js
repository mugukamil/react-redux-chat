import constants from "../constants";

const messagesReducer = (state = [], action) => {
  if (action.type === constants.NEW_MESSAGE) {
    return [
      ...state,
      {
        text: action.text,
        author: action.author,
        time: action.time,
        color: action.color
      }
    ];
  }
  return state;
};

export default messagesReducer;
