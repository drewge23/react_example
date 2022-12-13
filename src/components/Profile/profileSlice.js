import {createSlice} from "@reduxjs/toolkit";
import {profileAPI, usersAPI} from "../../api/api";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileInfo: {
            aboutMe: null,
            contacts: null,
            lookingForAJob: false,
            lookingForAJobDescription: null,
            fullName: null,
            userId: 0,
            photos: {
                small: null,
                large: null
            }
        },
        profileStatus: "change me",
        isFetching: false,
    },
    reducers: {
        setProfileInfo: (state, action) => {
            state.profileInfo = action.payload;
            return state;
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
            return state;
        },
        setProfileStatus: (state, action) => {
            state.profileStatus = action.payload;
            return state;
        }
    }
})

export const getProfileThunkCreator = userId => dispatch => {
    dispatch(setIsFetching(true));
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfileInfo(data));
            dispatch(setIsFetching(false));
        })
}
export const getStatusTC = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setProfileStatus(data || "no status"));
        })
}
export const updateStatusTC = status => dispatch => {
    profileAPI.updateStatus(status)
}

export default profileSlice.reducer;
export const {setProfileInfo, setIsFetching, setProfileStatus} = profileSlice.actions;