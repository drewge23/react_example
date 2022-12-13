import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    selectFollowingProgress,
    setPageSize,
    unfollowUserThunkCreator
} from "./friendsSlice";
import s from "../Profile/Profile.module.css";
import {NavLink} from "react-router-dom";

const Friends = () => {
    let dispatch = useDispatch();
    let friends = useSelector(state => state.friends.friends);
    let friendsTotal = useSelector(state => state.friends.friendsTotal);
    let pageSize = useSelector(state => state.friends.pageSize);
    let pagesAmount = Math.ceil(friendsTotal / pageSize);

    let pages = [];
    for (let i = 1; i <= Math.min(pagesAmount, 10); i++) {
        pages.push(i);
    }

    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => dispatch(getUsersThunkCreator(pageNumber, pageSize)), [pageNumber, pageSize, dispatch]);

    const isFetching = useSelector(state => state.friends.isFetching);
    const followingProgress = useSelector(selectFollowingProgress);

    return (
        <div className={s.prHeader}>
            <button
                onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}
            > {'<'} </button>

            {pages.map(p => <button
                key={p}
                style={p === pageNumber ? {width: 50, height: 50} : {width: 50, height: 30}}
                onClick={() => setPageNumber(p)}
            > {p} </button>)}

            <button
                onClick={() => setPageNumber(pageNumber < pagesAmount ? pageNumber + 1 : pageNumber)}
            > {'>'} </button>

            <p></p>

            <button
                onClick={() => dispatch(setPageSize(10))}
            > {'page size +'} </button>
            <button
                onClick={() => dispatch(setPageSize(5))}
            > {'page size -'} </button>

            <div>Friends</div>
            {isFetching
                ? <p> data is fetching... </p>
                : friends.map(user => {
                    return (<div key={user.id}
                                 style={{marginTop: 20}}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small} alt="no profile pic"
                                     style={{width: 100, height: 100, borderRadius: 25}}/>
                            </NavLink>
                        </div>
                        <div>{user.name}</div>
                        <div>{user.id}</div>
                        {user.followed
                            ? <button disabled={followingProgress.some(id => id === user.id)}
                                onClick={() => dispatch(unfollowUserThunkCreator(user.id))}
                            > unfollow </button>
                            : <button disabled={followingProgress.some(id => id === user.id)}
                                onClick={() => dispatch(followUserThunkCreator(user.id))}
                            > follow </button>}
                    </div>)
                })}
        </div>
    )
}

export default Friends;