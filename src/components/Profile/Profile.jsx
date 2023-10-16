import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let postsData = [
    {id: 1, text: "First Post", likesCount: "10"},
    {id: 2, text: "Second Post with different text", likesCount: "20"},
]

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;