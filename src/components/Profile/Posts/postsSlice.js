import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    posts: [
        { id: nanoid(), text: "just a simple post, nothing special" },
        { id: nanoid(), text: "rare post, a bit specail" },
        { id: nanoid(), text: "a very speacial post" },
    ],
    newPostText: 'new post',
};

const postsSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            let newPost = {
                id: nanoid(),
                text: action.payload.finalText,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        },
        postTextUpdated: (state, action) => { 
            state.newPostText = action.payload.currentText;
            return state;
        },
    }
});

export default postsSlice.reducer;
export const { postAdded, postTextUpdated } = postsSlice.actions; 