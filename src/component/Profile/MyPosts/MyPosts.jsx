import React from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={s.posts}>
      My posts
      <div className={s.cart}>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post name="QQ" count="4" message="Hi, how are you" />
        <Post name="RR" count="53" message="It's, my first are message" />
      </div>
    </div>
  );
}
export default MyPosts;
