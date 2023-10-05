import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Vlad"},
        {id: 2, name: "Ilya"},
        {id: 3, name: "Leha"},
        {id: 4, name: "Serega"},
        {id: 5, name: "Diman"}
    ]

    let dialogsElements = dialogsData.map((person) => <DialogItem id={person.id} name={person.name}/>)

    let messagesData = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "Privet, brat!"},
        {id: 3, message: "Spasibo!"},
        {id: 4, message: "Ne nado!"},
        {id: 5, message: "OK"}
    ]
    let messagesElements = messagesData.map((message) => <MessageItem text={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;