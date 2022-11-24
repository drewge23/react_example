import Post from './Post';
import React from 'react';

const Posts = (props) => {
    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div style={{ padding: '0px 30px' }} className="content">
            <div className="prPosts">
                <textarea
                    ref={newPost}
                    onChange={onPostChange}
                    value={props.newPostText} />
                <button onClick={onAddPost}> new post </button>
                {props.posts.map(el => <Post text={el.text} />)}
            </div>
        </div>
    )
}

export default Posts;