import {createSlice} from "@reduxjs/toolkit";
import {authAPI} from "../api/api";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        id: null,
        login: null,
        email: null,
        isLogged: false,
        isFetching: false,
    },
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state,
                ...action.payload,
                isLogged: true,
            }
        },
        setIsFetching: (state, action) => {
            return {
                ...state,
                isFetching: action.payload,
            }
        },
    }
})

export const getAuthThunkCreator = () => dispatch => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data));
        }
    });
}

export default authSlice.reducer;
export const {setUserData, setIsFetching} = authSlice.actions;