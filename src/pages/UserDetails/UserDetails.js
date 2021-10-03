import React, { useState } from "react";
import "../Chat/Chat.css";
import { FaRegMoon } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

function User() {
  return (
    <div className="container">
      <div className="left-side">
        <form id="form" role="search">
          <input
            type="search"
            id="query"
            name="q"
            placeholder="Search..."
            aria-label="Search through site content"
          />
          <button>Search</button>
        </form>
        <div className="left-side-item user-list">User List</div>
        <hr />

        <div className="left-side-item settings">
          <FaRegMoon style={{ width: "60px", height: "60px" }} />
          <FaSignOutAlt style={{ width: "60px", height: "60px" }} />
        </div>
      </div>
      <div className="right-side">
        <div className="header"></div>
        <div className=" block">
          <BsCameraVideo
            style={{
              width: "60px",
              height: "60px",
              color: "blue",
              backgroundColor: "white",
              margin: "25px",
            }}
          />
          <AiOutlinePhone
            style={{
              width: "60px",
              height: "60px",
              color: "blue",
              backgroundColor: "white",
              margin: "25px",
            }}
          />
          <AiOutlineMessage
            style={{
              width: "60px",
              height: "60px",
              color: "blue",
              backgroundColor: "white",
              margin: "25px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
