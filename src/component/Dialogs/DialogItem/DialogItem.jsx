// import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/*" + props.id;
  return (
    <div className={`${s.dialogs} ${s.active}`}>
      <img
        src="https://opis-cdn.tinkoffjournal.ru/mercury/m-o-avatar2.nakfqy..jpg"
        alt="img"
      />

      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
