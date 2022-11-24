const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (text) => 
    ({type: ADD_POST, postText: text});
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [
        { id: 1, text: "just a simple post, nothing special" },
        { id: 2, text: "rare post, a bit specail" },
        { id: 3, text: "a very speacial post" },
    ],
    newPostText: 'new post',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                text: action.postText,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export default profileReducer;