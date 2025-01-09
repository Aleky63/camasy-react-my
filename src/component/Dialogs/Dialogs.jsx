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
  let dialogsData = [
    {
      id: 1,
      name: "Aleky",
    },
    {
      id: 2,
      name: "Maksim",
    },
    {
      id: 3,
      name: "Victor",
    },
    {
      id: 4,
      name: "Anna",
    },
    {
      id: 5,
      name: "Sasha",
    },
    {
      id: 6,
      name: "Masha",
    },
  ];
  let messagesData = [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How is your cycycycy",
    },
    {
      id: 3,
      message: "Dood day",
    },
    {
      id: 4,
      message: "Yo",
    },
    {
      id: 5,
      message: "Yoiiiitt",
    },
    {
      id: 6,
      message: "Yozzzzzzz",
    },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <DialogItem name="Victor" id="3" />
        <DialogItem name="Anna" id="4" />
        <DialogItem name="Sasha" id="5" />
        <DialogItem name="Masha" id="6" /> */}
      </div>

      <div className={s.message}>
        <Messages message={messagesData[0].message} id={messagesData[0].id} />
        <Messages message={messagesData[1].message} id={messagesData[1].id} />
        {/* <Messages message="Dood day" />
        <Messages message="Yo" />
        <Messages message="Yoii" />
        <Messages message="Yozzzzzzz" /> */}
      </div>
    </div>
  );
}
export default Dialogs;
