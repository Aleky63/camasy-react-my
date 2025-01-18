const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
          likesCount: 235,
        },
        {
          id: 3,
          message: "It's, my first are mess",
          likesCount: 36,
        },
        {
          id: 4,
          message: "Parsing error: Unexpected token",
          likesCount: 222,
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
          message: "Yoiiiitt",
        },
        {
          id: 6,
          message: "Yozzzzz",
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
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

export default store;
window.store = store;
