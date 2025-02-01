const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
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
      name: " Katya",
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
  ],
  messages: [
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
      message: "Yoiiiitgjgffgojfgf",
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 5, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
