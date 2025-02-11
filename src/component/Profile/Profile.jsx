import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
}
export default Profile;
