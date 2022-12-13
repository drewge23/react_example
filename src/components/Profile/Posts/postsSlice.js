import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [], /*id: nanoid(), text: "text"*/
        status: 'idle',
        error: null,
    },
    reducers: {
        postAdded: (state, action) => {
            let {text} = action.payload;
            let newPost = {
                id: nanoid(),
                text: text,
            }
            state.posts.push(newPost);
            return state;
        },
    }
});

export default postsSlice.reducer;
export const { postAdded } = postsSlice.actions;