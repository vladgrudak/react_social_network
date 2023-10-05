import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id="1" name="Vlad" />
                <DialogItem id="2" name="Ilya" />
                <DialogItem id="3" name="Leha" />
                <DialogItem id="4" name="Serega" />
                <DialogItem id="5" name="Diman" />
            </div>
            <div className={s.messages}>
                <MessageItem text="Hello!"/>
                <MessageItem text="Privet, brat!"/>
                <MessageItem text="Spasibo!"/>
                <MessageItem text="Ne nado!"/>
                <MessageItem text="OK!"/>
            </div>
        </div>
    )
}

export default Dialogs;