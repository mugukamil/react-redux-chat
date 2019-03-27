import { combineReducers } from "redux";
import peopleReducer from "./people";
import messagesReducer from "./messages";

export default combineReducers({ peopleReducer, messagesReducer });
