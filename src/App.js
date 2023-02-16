import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Profile from './components/Profile/Profile';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import DocumentTitle from 'react-document-title'

import './App.css';
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";
import {getAuthThunkCreator} from "./redux/authSlice";
import {useDispatch} from "react-redux";

const NotFound = ({message}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            backgroundColor: '#f5c5c5',
            color: 'black',
            fontWeight: '700',
            borderRadius: '25px 25px 0 0',
        }}>
            {message}
        </div>
    )
}

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthThunkCreator());
    }, [dispatch])

    return (
        <DocumentTitle title={'Social network'}>
            <HashRouter>
                <div className="App">
                    <Header/>
                    <SideNav/>
                    <div style={{minHeight: '80vh'}}>
                        <Routes>
                            <Route path="profile/:userId" element={<Profile/>}/>
                            <Route path="friends/*" element={<Friends/>}/>

                            <Route path="/messages"
                                   element={<NotFound message={'This page is still under construction 🚧'}/>}/>
                            <Route path="/music"
                                   element={<NotFound message={'This page is still under construction 🚧'}/>}/>
                            <Route path="/photos"
                                   element={<NotFound message={'This page is still under construction 🚧'}/>}/>
                            <Route path="/files"
                                   element={<NotFound message={'This page is still under construction 🚧'}/>}/>
                            <Route path="/bookmarks"
                                   element={<NotFound message={'This page is still under construction 🚧'}/>}/>

                            <Route path="login" element={<Login/>}/>
                            <Route path="" element={<Navigate to={'/profile/:userId'}/>}/>
                            <Route path="*" element={<NotFound message={'404 PAGE NOT FOUND 😓'}/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        </DocumentTitle>
    );
}

export default App;