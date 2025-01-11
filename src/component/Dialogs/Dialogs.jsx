import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
      message: "Yozzzzz",
    },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.message}>{messagesElements}</div>
    </div>
  );
}
export default Dialogs;
