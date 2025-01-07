import React from "react";

import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <Link to="/dialogs/1">Aleky</Link>
        </div>
        <div className={s.dialog}>
          <Link to="/dialogs/2">Maks</Link>
        </div>
        <div className={s.dialog}>
          <Link to="/dialogs/3"> Victor</Link>
        </div>
        <div className={s.dialog}>
          <Link to="/dialogs/4"> Sasha</Link>
        </div>
        <div className={s.dialog}>
          <Link to="/dialogs/5"> Sveta</Link>
        </div>
        <div className={s.dialog}>
          <Link to="/dialogs/6"> Anna</Link>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your</div>
        <div className={s.message}>Dood day</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
}
export default Dialogs;
