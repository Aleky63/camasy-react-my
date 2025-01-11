import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  let postsElements = props.posts.map((post) => (
    <Post
      name={post.name}
      likesCount={post.likesCount}
      message={post.message}
    />
  ));

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.cart}>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
export default MyPosts;
