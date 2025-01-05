import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={s.content}>
      <div className="">
        <img src="https://azur.ru/data/newfotos1/big/60/157960.jpg" alt="" />
      </div>
      <div className={s.descr}>AAAAAVVa +descr</div>
      <MyPosts />
    </div>
  );
}
export default Profile;
