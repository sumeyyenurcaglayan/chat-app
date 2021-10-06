import React, { useState } from "react";
import "./UserDetails.css";
import Blocks from "./components/Blocks";
import SearchInput from "./components/SearchInput";
import Settings from "./components/Settings";
import UserList from "./components/UserList";
import UserHeader from "./components/UserHeader";
import { Redirect } from "react-router";

function UserDetails() {
  const [searchText, setSearchText] = useState("");
  if (localStorage.getItem("username") == null) {
    return <Redirect to="/login"></Redirect>;
  }
  return (
    <div className="details-chat-container">
      <div className="details-left-side">
        <SearchInput value={searchText} onChange={setSearchText} />
        <UserList searchText={searchText} />
        <Settings />
      </div>
      <div className="details-right-side">
        <UserHeader />
        <Blocks />
      </div>
    </div>
  );
}

export default UserDetails;
