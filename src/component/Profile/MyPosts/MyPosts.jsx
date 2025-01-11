import React from "react";
import s from "./MyPosts.module.css";

import Post from "./Post/Post";

function MyPosts(props) {
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
    {
      name: "MMM _",
      id: 3,
      message: "It's, my first are mess",
      likesCount: 51,
    },
  ];

  let postsElements = postData.map((post) => (
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
