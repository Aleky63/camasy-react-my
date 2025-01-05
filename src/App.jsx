import React from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
// import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
