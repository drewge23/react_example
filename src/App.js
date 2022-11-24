import React from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Messages from './components/Messages/Messages';

function App(props) {
  // let isLoggedIn = true;
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <SideNav />
              <Routes>
                  <Route path="profile/*" element=
                      {<Profile />} />
                  
                  <Route path="messages/*" element=
                      {<Messages 
                        messagesPage={props.state.messagesPage}
                        dispatch={props.dispatch} />} />
              </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

{/* ex Profile props
store={props.store}
profilePage={props.state.profilePage}
dispatch={props.dispatch}  */}