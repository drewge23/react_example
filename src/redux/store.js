import { createSlice } from "@reduxjs/toolkit";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
    _subscriber() {
        console.log("no subscribers / observers");
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: "just a simple post, nothing special" },
                { id: 2, text: "rare post, a bit specail" },
                { id: 3, text: "a very speacial post" },
            ],
            newPostText: 'new post',
        },
        messagesPage: {
            dialogs: [
                { id: 1, userName: 'Vlad' },
                { id: 2, userName: 'Polina' },
                { id: 3, userName: 'Katia' },
                { id: 4, userName: 'Misha' },
                { id: 5, userName: 'Dania' },
                { id: 6, userName: 'Andrei' },
            ],
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Buy me a car full of fish" },
            ],
            newMessageText: 'new message',
        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._subscriber(this._state);
    }
}

export default store;
window.store = store;