import React from "react";
import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <Link to={path}>{props.name}</Link>
    </div>
  );
}

function Messages(props) {
  return <div className={s.message}>{props.message}</div>;
}

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Aleky" id="1" />
        <DialogItem name="Maksim" id="2" />
        <DialogItem name="Victor" id="3" />
        <DialogItem name="Anna" id="4" />
        <DialogItem name="Sasha" id="5" />
        <DialogItem name="Masha" id="6" />
      </div>

      <div className={s.messages}>
        <Messages message="Hi" />
        <Messages message="How is your cycycycy" />
        <Messages message="Dood day" />
        <Messages message="Yo" />
        <Messages message="Yoii" />
        <Messages message="Yozzzzzzz" />
      </div>
    </div>
  );
}
export default Dialogs;
