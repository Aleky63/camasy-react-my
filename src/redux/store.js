import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer ";

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
      ],
      newPostText: "",
    },
    dialogsPage: {
      newMessageBody: "",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
