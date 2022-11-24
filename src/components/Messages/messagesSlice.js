import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    dialogs: [
        { id: 1, userName: 'Vlad' },
        { id: 2, userName: 'Polina' },
        { id: 3, userName: 'Olia' },
        { id: 4, userName: 'Katia' },
        { id: 5, userName: 'Misha' },
        { id: 6, userName: 'Dania' },
    ],
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Buy me a car full of fish" },
    ],
    newMessageText: 'new message',
};

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        messageAdded: (state, action) => {
            let newMessage = {
                id: nanoid(),
                message: action.payload.finalText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        },
        messageUpdated: (state, action) => {
            state.newMessageText = action.payload.currentText;
            return state;
        },
    }
})

export default messagesSlice.reducer;
export const { messageAdded, messageUpdated } = messagesSlice.actions;