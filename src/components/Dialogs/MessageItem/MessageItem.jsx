import React from "react";
import s from '../Dialogs.module.css';
let i = 0;
const MessageItem = (props) => {

    return (
        <div className={s.message}>{props.text}</div>
    )
}


export default MessageItem;