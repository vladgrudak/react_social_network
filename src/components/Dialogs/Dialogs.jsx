import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((person) => <DialogItem id={person.id} name={person.name} img={person.img}/>)
    let messagesElements = props.state.messagesData.map((message) => <MessageItem text={message.message}/>)

    let sendMessageElement = React.createRef();

    let sendMessage = () => {
        let text = sendMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={sendMessageElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;