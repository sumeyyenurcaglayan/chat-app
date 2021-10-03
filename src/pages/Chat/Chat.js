import React, { useState, useEffect, useContext } from "react";
import "./Chat.css";
import SearchInput from "./components/SearchInput";
import Settings from "./components/Settings";
import UserHeader from "./components/UserHeader";
import UserList from "./components/UserList";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";
import { Redirect, useParams } from "react-router";

function Chat() {
  const [searchText, setSearchText] = useState("");
  if (localStorage.getItem("username") == null) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div className="chat-container">
      <div className="left-side">
        <SearchInput value={searchText} onChange={setSearchText} />
        <UserList searchText={searchText} />
        <Settings />
      </div>
      <div className="right-side">
        <UserHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}

export default Chat;
