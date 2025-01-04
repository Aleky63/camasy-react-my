import React from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className="">
      My posts
      <div className="">
        <textarea name="" id=""></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
}
export default MyPosts;
