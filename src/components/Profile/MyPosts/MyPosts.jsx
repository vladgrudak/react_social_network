import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = () => {

    let postsData = [
        {id: 1, text: "First Post", likesCount: "10"},
        {id: 2, text: "Second Post with different text", likesCount: "20"},
    ]

    let postsElements = postsData.map((post)=><Post text={post.text} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;