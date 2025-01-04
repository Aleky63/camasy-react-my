/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import MyPosts from "./component/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <MyPosts />
    </div>
  );
}

export default App;
