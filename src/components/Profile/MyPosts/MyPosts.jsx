import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postsElements = props.postsData.map((post)=><Post text={post.text} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} placeholder='New post' value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;