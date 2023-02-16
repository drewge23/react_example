import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postDeleted} from "./postsSlice";

const Post = (props) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.auth.login)
    const userName = useSelector(state => state.profile.profileInfo.fullName)
    const [likes, setLikes] = useState(0);

    return (
        <div className="newPost">
            <img src="" alt=""/>
            <h2> {userName || userLogin} </h2>
            <p> {props.text} </p>
            <div style={{
                display: 'flex',
                gap: '10px'
            }}>
                <button onClick={() => setLikes(likes + 1)}> {likes + " ❤️"} </button>
                <button onClick={() => dispatch(postDeleted(props.id))}> 🗑️ </button>
            </div>
        </div>
    )
}

export default Post;