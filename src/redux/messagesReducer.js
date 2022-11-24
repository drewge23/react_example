const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = (text) => 
    ({type: ADD_MESSAGE, messageText: text});
export const updateNewMessageTextActionCreator = (text) => 
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

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

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.messageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export default messagesReducer;