import React from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
// import Messages from './components/Messages/Messages';
import Test from './components/Test';
import Friends from "./components/Friends/Friends";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <SideNav />
              <Routes>
                  <Route path="profile/:userId" element=
                      {<Profile />} />
                  <Route path="friends/*" element=
                      {<Friends />} />
                  <Route path="messages/*" element=
                      {<Test name={"Andrei"}/>} />
                  <Route path="login" element=
                      {<Login />} />
              </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;