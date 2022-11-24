import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        { id: nanoid(), text: "just a simple post, nothing special" },
        { id: nanoid(), text: "rare post, a bit specail" },
        { id: nanoid(), text: "a very speacial post" },
    ],
    newPostText: 'new post',
};

const profileSlice = createSlice({
    name: profile,
    initialState,
    reducers: {
        postAdded: (state, action) => {
            let newPost = {
                id: nanoid(),
                text: action.postText,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        },
        postTextUpdated: (state, action) => { 
            state.newPostText = action.newText;
            return state;
        },
    }
});

export default profileSlice.reducer;
export const { postAdded, postTextUpdated } = profileSlice.actions; 