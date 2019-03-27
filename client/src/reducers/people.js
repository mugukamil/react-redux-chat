import constants from "../constants";

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case constants.CONNECTED_NEW_USER:
      return [...state, { userName: action.userName, id: action.userId }];
    case constants.DISCONNECTED_USER:
      return state.filter(u => u.id !== action.userId);

    default:
      return state;
  }
};

export default peopleReducer;
