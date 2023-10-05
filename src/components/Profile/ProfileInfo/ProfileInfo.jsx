import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div className={s.longImage}>
                <img src="https://a.l3n.co/i/qi0Br.jpg" alt="longimage"/>
            </div>
            <div className={s.avaDesc}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg"
                     alt="squareimage"/>
            </div>
        </div>
    )
}

export default ProfileInfo;