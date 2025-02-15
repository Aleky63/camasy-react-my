import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </StoreContext.Provider>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();
