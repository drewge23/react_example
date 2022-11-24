import { Provider } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import Posts from './Posts';

const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText));
                }
                let updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <Posts 
                    addPost = {addPost}
                    updateNewPostText = {updateNewPostText}    
                    posts = {state.profilePage.posts}
                    newPostText = {state.profilePage.newPostText}
                    /> )
            } }
        </StoreContext.Consumer> 
        )
}

export default PostsContainer;