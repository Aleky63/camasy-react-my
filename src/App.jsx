/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import "./App.css";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
