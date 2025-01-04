import React from "react";
import s from "./Post.module.css";

function Post() {
  return (
    <div className={s.item}>
      <img
        src="https://opis-cdn.tinkoffjournal.ru/mercury/m-o-avatar2.nakfqy..jpg"
        alt="img"
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
export default Post;
