import React from "react";
import { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/state";

function MyPosts(props) {
  let postsElements = props.posts.map((post) => (
    <Post likesCount={post.likesCount} message={post.message} key={post.id} />
  ));
  let newPostElement = useRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.dispatch(updatePostTextActionCreator(text));
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
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
export default MyPosts;
