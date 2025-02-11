// import s from "./Dialogs.module.css";
// import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
// import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";

function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  // let dialogsElements = state.dialogs.map((dialog) => (
  //   <DialogItem name={dialog.name} key={dialog.id} />
  // ));

  // let messagesElements = state.messages.map((message) => (
  //   <Message message={message.message} key={message.id} />
  // ));
  // let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
}
export default DialogsContainer;
