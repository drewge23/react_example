import { combineReducers, legacy_createStore } from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
});

let store = legacy_createStore(reducers);

export default store;