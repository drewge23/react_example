import {Link, Navigate} from 'react-router-dom';
import s from './Messages.module.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';
import {useDispatch, useSelector} from "react-redux";
import {messageAdded, messageUpdated} from "./messagesSlice";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialogItem}>
            <Link to={path}> {props.name} </Link>
        </div>
    )
}

const MessageItem = (props) => {
    return <div className={s.message}> {props.message} </div>
}

const Messages = () => {
    const dispatch = useDispatch();

    const dialogs = useSelector(state => state.messages.dialogs);
    const messages = useSelector(state => state.messages.messages);
    const newMessageText = useSelector(state => state.messages.newMessageText);

    const isLogged = useSelector(state => state.auth.isLogged)
    if (!isLogged) {
        return <Navigate to={"/login"}/>
    }

    const updateNewMessage = (e) => {
        dispatch(messageUpdated(e.target.value));
    }

    const sendMessage = () => {
        dispatch(messageAdded(newMessageText));
    }

    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            <div style={{
                margin: '30px auto',
                textAlign: 'center'
            }}>
                Messages
            </div>
            <div className={s.dialogs}>
                <div className="dialogList">
                    {dialogs.map(el => <DialogItem name={el.userName} key={el.id} />)}
                </div>

                <div className="messages">
                    {messages.map(el => <MessageItem message={el.message} key={el.id} />)}
                    <textarea 
                        value = {newMessageText}
                        onChange = { updateNewMessage }
                        placeholder = 'Enter your message'
                    ></textarea>
                    <button onClick={ sendMessage }> Send </button>
                </div>
            </div>
        </div>
    )
}

export default Messages;