import {createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../../api/api";

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
        isEditMode: false,
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
        },
        setProfilePic: (state, action) => {
            state.profileInfo.photos = action.payload
            return state
        },
        setIsEditMode: (state, action) => {
            state.isEditMode = action.payload
            return state
        },
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
export const setProfileInfoTC = profileInfo => dispatch => {
    dispatch(setIsFetching(true))
    profileAPI.updateProfileInfo(profileInfo)
        .then(response => {
            if (response === 0) {
                dispatch(setProfileInfo(profileInfo))
            }
        })
        .then(dispatch(setIsFetching(false)))
        .then(dispatch(setIsEditMode(false)))
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

export const saveProfilePic = file => async dispatch => {
    let response = await profileAPI.updateProfilePic(file)

    if (response.data.resultCode === 0) {
        dispatch(setProfilePic(response.data.data.photos))
    }
}

export default profileSlice.reducer;
export const {setProfileInfo, setIsFetching, setProfileStatus, setProfilePic, setIsEditMode} = profileSlice.actions;