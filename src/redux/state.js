const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hi, how are you gy",
          likesCount: 9,
        },
        {
          id: 2,
          message: "It's, my first are messagesss",
          likesCount: 214,
        },
        {
          id: 3,
          message: "It's, my first are mess",
          likesCount: 36,
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("change");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD_POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND_MESSAGE") {
      let body = (this._state.dialogsPage.newMessageBody = action.body);

      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 8, message: body });

      this._callSubscriber(this._state);
    }
  },
};
// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
window.store = store;
