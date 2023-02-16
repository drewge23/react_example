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
import {NavLink, useNavigate} from "react-router-dom";
import DocumentTitle from 'react-document-title'

import BUSINESS_CAT from '../../assets/business_cat.jpg'

const Friends = () => {
    const dispatch = useDispatch();
    const friends = useSelector(state => state.friends.friends);
    const friendsTotal = useSelector(state => state.friends.friendsTotal);

    const isLogged = useSelector(state => state.auth.isLogged)
    const navigate = useNavigate()

    let pageSize = useSelector(state => state.friends.pageSize);
    let pagesAmount = Math.ceil(friendsTotal / pageSize);

    const [firstPage, setFirstPage] = useState(1)
    const [lastPage, setLastPage] = useState(10)

    let pages = [];
    for (let i = firstPage; i <= Math.min(pagesAmount, lastPage); i++) {
        pages.push(i);
    }

    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => dispatch(getUsersThunkCreator(pageNumber, pageSize)), [pageNumber, pageSize, dispatch]);

    const isFetching = useSelector(state => state.friends.isFetching);
    const followingProgress = useSelector(selectFollowingProgress);

    return (
        <DocumentTitle title={'Users'}>
            <div className={s.prHeader}>
                <button
                    style={{
                        margin: '5px'
                    }}
                    onClick={() => {
                        setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)
                        if (firstPage > 1 && pageNumber <= firstPage) {
                            setFirstPage(firstPage - 10)
                            setLastPage(lastPage - 10)
                        }
                    }}
                > {'<'} </button>

                {pages.map(p => <button
                    key={p}
                    style={{
                        width: 50,
                        height: 50,
                        padding: 0,
                        margin: '5px',
                        backgroundColor: p === pageNumber ? '#74d9d9' : 'lightcyan'
                    }}
                    onClick={() => setPageNumber(p)}
                > {p} </button>)}

                <button
                    style={{
                        margin: '5px'
                    }}
                    onClick={() => {
                        setPageNumber(pageNumber < pagesAmount ? pageNumber + 1 : pageNumber)
                        if (pageNumber >= lastPage) {
                            setFirstPage(firstPage + 10)
                            setLastPage(lastPage + 10)
                        }
                    }}
                > {'>'} </button>

                <p></p>

                <button
                    style={{margin: '5px'}}
                    onClick={() => dispatch(setPageSize(pageSize + 5))}
                > show more +
                </button>
                <button style={{margin: '5px'}}
                    onClick={() => {
                        if (pageSize >= 9) dispatch(setPageSize(pageSize - 5))
                    }}
                > show less -
                </button>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px 0 50px 50px'
                }}>
                    <h1>Users</h1>
                    {isFetching
                        ? <p> data is fetching... </p>
                        : <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}>
                            {friends.map(user => {
                                return (<div key={user.id}
                                             style={{
                                                 display: 'flex',
                                                 flexDirection: 'column',
                                                 justifyContent: 'center',
                                                 alignItems: 'center',
                                                 marginRight: '100px',
                                                 marginBottom: '50px'
                                             }}>
                                    <div>
                                        <NavLink to={`/profile/${user.id}`}>
                                            <img src={user.photos.small
                                                ? user.photos.small
                                                : BUSINESS_CAT} alt=""
                                                 style={{width: 100, height: 100, borderRadius: 25}}/>
                                        </NavLink>
                                    </div>
                                    <div><b>{user.name}</b></div>
                                    <div>id: {user.id}</div>
                                    {user.followed && isLogged
                                        ? <button disabled={!isLogged || followingProgress.some(id => id === user.id)}
                                                  onClick={() => dispatch(unfollowUserThunkCreator(user.id))}
                                        > unfollow </button>
                                        : <button disabled={followingProgress.some(id => id === user.id)}
                                                  onClick={() =>
                                                      isLogged
                                                          ? dispatch(followUserThunkCreator(user.id))
                                                          : navigate('/login')}
                                        > follow </button>}
                                </div>)
                            })}
                        </div>}
                        </div>
                        </div>
                        </DocumentTitle>
                        )
                    }

                    export default Friends;
