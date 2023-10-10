import React from "react";
import s from './../Navbar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (

            <div className={s.friend}>
                <img src={props.img}/><br/>
                <span>{props.name}</span>
            </div>

    )
}

export default Sidebar;