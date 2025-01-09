import React from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts() {
  let postData = [
    {
      name: "QQQ _",
      id: 1,
      message: "Hi, how are you gy",
      likesCount: 9,
    },
    {
      name: "RRR _",
      id: 2,
      message: "It's, my first are messagesss",
      likesCount: 251,
    },
  ];
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.cart}>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post
          name={postData[0].name}
          likesCount={postData[0].likesCount}
          message={postData[0].message}
        />
        <Post
          name={postData[1].name}
          likesCount={postData[1].likesCount}
          message={postData[1].message}
        />
      </div>
    </div>
  );
}
export default MyPosts;
