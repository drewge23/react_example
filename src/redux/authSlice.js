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
            }
        },
        setIsFetching: (state, action) => {
            return {
                ...state,
                isFetching: action.payload,
            }
        },
        setIsLogged: (state, action) => {
            return {
                ...state,
                isLogged: action.payload,
            }
        }
    }
})

export const getAuthThunkCreator = () => dispatch => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data));
            dispatch(setIsLogged(true))
        }
    });
}
export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthThunkCreator);
            dispatch(setIsLogged(true))
        }
    });
}
export const logout = () => dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData({id: null, login: null, email: null}));
            dispatch(setIsLogged(false))
        }
    });
}


export default authSlice.reducer;
export const {setUserData, setIsFetching, setIsLogged} = authSlice.actions;