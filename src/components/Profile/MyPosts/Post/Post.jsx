import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://ru-static.z-dn.net/files/ddd/02bd3a23f077cda4cc1843b6467a4db1.jpg"/>
            {props.text}
            <div>
                <span>Like </span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;