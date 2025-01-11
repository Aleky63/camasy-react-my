import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div>
      <div className="">
        <img src="https://azur.ru/data/newfotos1/big/60/157960.jpg" alt="" />
      </div>
      <div className={s.descr}>
        В исследованиях, разработке и строительстве Tansuo-3
      </div>
    </div>
  );
}
export default ProfileInfo;
