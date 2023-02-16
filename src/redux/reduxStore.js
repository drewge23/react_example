import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import messagesReducer from "../components/Messages/messagesSlice";
import postsReducer from "../components/Profile/Posts/postsSlice";
import friendsReducer from "../components/Friends/friendsSlice";
import profileReducer from "../components/Profile/profileSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
    friends: friendsReducer,
    profile: profileReducer,
    auth: authReducer,
})

const store = configureStore({reducer: rootReducer});

export default store;