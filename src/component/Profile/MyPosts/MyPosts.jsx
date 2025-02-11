import React from "react";
import { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
// import {
//   updateNewPostTextActionCreator,
//   addPostActionCreator,
// } from "../../../redux/profileReducer";

function MyPosts(props) {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = useRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.cart}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>

        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
export default MyPosts;
