import { useState } from "react";

const Post = (props) => {
    const [likes, setLikes] = useState(0);
    
    return (
        <div className="newPost">
            <img src="" alt="" />
            <h2> UserName </h2>
            <p> {props.text} </p>
            <button onClick={() => setLikes(likes + 1)}> {likes + " ❤️"} </button>
        </div>
    )
}

export default Post;