import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Post from "../Profile/MyPosts/Post/Post";
import Sidebar from "./Sidebar/Sidebar";



const Navbar = (props) => {

    let sidebarElements = props.state.friendsData.map((friend)=><Sidebar name={friend.name} img={friend.img}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={a => a.isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={a => a.isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={a => a.isActive ? s.active : ''}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={a => a.isActive ? s.active : ''}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={a => a.isActive ? s.active : ''}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                {sidebarElements}
            </div>
        </nav>
    )
}

export default Navbar;