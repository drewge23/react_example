import { useState } from "react";
import {useSelector} from "react-redux";

const Post = (props) => {
    const userName = useSelector(state => state.auth.login)
    const [likes, setLikes] = useState(0);
    
    return (
        <div className="newPost">
            <img src="" alt="" />
            <h2> {userName} </h2>
            <p> {props.text} </p>
            <button onClick={() => setLikes(likes + 1)}> {likes + " ❤️"} </button>
        </div>
    )
}

export default Post;