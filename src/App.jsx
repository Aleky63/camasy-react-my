import React from "react";
import "./App.css";

import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route
              path="/profile/*"
              element={
                <Profile name={props.likesCount} messages={props.messages} />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            /> */}

            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile postsData={props.postsData} />}
            />

            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
