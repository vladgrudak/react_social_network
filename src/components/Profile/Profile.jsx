import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.longImage}>
                <img src="https://a.l3n.co/i/qi0Br.jpg" alt="longimage"/>
            </div>
            <div className={s.ava}>
                <img src="https://wallpapers.com/images/hd/square-pictures-3000-x-3000-fiqulodtb0q3p20y.jpg"
                     alt="squareimage"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;