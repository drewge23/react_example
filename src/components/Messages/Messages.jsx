import { Link } from 'react-router-dom';
import s from './Messages.module.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer';

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

const Messages = (props) => {
    let dialogs = props.messagesPage.dialogs;
    let messages = props.messagesPage.messages;
    // let newMessage = React.createRef();

    const updateNewMessage = (e) => {
        // let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(e.target.value);
        props.dispatch(action);
    }

    let sendMessage = () => {
        let message = props.messagesPage.newMessageText;
        let action = addMessageActionCreator(message);
        props.dispatch(action);
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
                    {dialogs.map(el => <DialogItem name={el.userName} id={el.id} />)}
                </div>

                <div className="messages">
                    {messages.map(el => <MessageItem message={el.message} />)}
                    <textarea 
                        // ref={newMessage}   
                        value = {props.messagesPage.newMessageText}
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