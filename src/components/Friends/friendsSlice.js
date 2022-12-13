import {createSlice} from "@reduxjs/toolkit";
import {usersAPI} from "../../api/api";

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [/*{id: nanoid(), name: "vasia", followed: false, uniqueUrlName: './url'}*/],
        friendsTotal: 0,
        pageSize: 5,
        isFetching: false,
        followingProgress: [],
    },
    reducers: {
        setFriends: (state, action) => {
            state.friends = action.payload;
            // state.push(action.payload);
            return state;
        },
        setFriendsTotal: (state, action) => {
            state.friendsTotal = action.payload;
            return state;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
            return state;
        },
        follow: (state, action) => {
            //with "find()"
            state.friends.find(user => user.id === action.payload).followed = true;
            return state;
        },
        unfollow: (state, action) => {
            //basic
            for (let i in state.friends) {
                if (state.friends[i].id === action.payload) {
                    state.friends[i].followed = false;
                    break;
                }
            }
        },
        toggleFollowingProgress: (state, action) => {
            let userId = action.payload;
            if (state.followingProgress.some(id => id === userId)) {
                state.followingProgress = state.followingProgress.filter(id => id !== userId);
                return state;
            } else {
                state.followingProgress = [...state.followingProgress, userId];
                return state;
            }
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
            return state;
        },
    }
})

export const getUsersThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setFriends(data.items));
                dispatch(setFriendsTotal(data.totalCount));
                dispatch(setIsFetching(false));
            });
    }
}
export const unfollowUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(id));
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id));
                }
                dispatch(toggleFollowingProgress(id))
            })
    }
}
export const followUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(id));
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(toggleFollowingProgress(id))
            })
    }
}

export default friendsSlice.reducer;
export const {setFriends, setFriendsTotal, setPageSize, follow, unfollow, toggleFollowingProgress, setIsFetching} = friendsSlice.actions;

export const selectFollowingProgress = state => state.friends.followingProgress;