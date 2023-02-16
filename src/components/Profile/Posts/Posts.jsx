import Post from './Post';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postAdded} from './postsSlice';
import {useState} from 'react';

const Posts = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    const [text, setText] = useState("");

    const onAddPost = () => {
        if (text) {
            dispatch(postAdded({text: text}));
            setText("");
        }
    }

    return (
        <div style={{
            padding: '30px',
            flexGrow: 1,
            borderRadius: '25px',
            marginBottom: '10px',
        }} className="content">
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <textarea
                    onChange={(e) => setText(e.target.value)}
                    value={text}/>
                <button onClick={onAddPost}> new post</button>
            </div>
            <div>
                {posts.map(post =>
                    <Post key={post.id} text={post.text}/>)}
            </div>
        </div>
    )
}

export default Posts;