import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://opis-cdn.tinkoffjournal.ru/mercury/m-o-avatar2.nakfqy..jpg"
        alt="img"
      />
      {props.message}

      <div className={s.descr}>
        <div>{props.name}</div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
}
export default Post;
