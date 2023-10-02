import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.post}>
                <Post text="First Post" likeCounts="10"/>
                <Post text="Second Post with different text" likeCounts="2git0"/>
            </div>
        </div>
    )
}

export default MyPosts;