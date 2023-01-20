import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
// import Test from './components/Test';
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import {getAuthThunkCreator} from "./redux/authSlice";
import {useDispatch} from "react-redux";
import Messages from "./components/Messages/Messages";

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthThunkCreator());
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <SideNav/>
                <Routes>
                    <Route path="profile/:userId" element={<Profile/>}/>
                    <Route path="friends/*" element={<Friends/>}/>
                    <Route path="messages/*" element={<Messages/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;