import React from "react";
import { UserContext } from "../../../context/login";

import { useHistory } from "react-router-dom";
export default function UserList(props) {
  const { userList, selectUser } = React.useContext(UserContext);
  let history = useHistory();

  const filter = (currentValue, index, arr) => {
    const name = currentValue.first_name + " " + currentValue.last_name;
    if (name.toLowerCase().includes(props.searchText)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="user-list">
      {userList.filter(filter).map((item) => {
        const lastMessage = item.messages[item.messages.length - 1].text;
        return (
          <div
            style={{ display: "flex", flexDirection: "row" }}
            className="user-list__user"
            onClick={() => {
              selectUser(item.id);
              history.push("/chat/" + item.id);
            }}
          >
            <div
              className="image"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50px",
                backgroundColor: "chat-search-text",
              }}
            ></div>
            <div className="messages">
              <p style={{ marginLeft: "1rem", fontWeight: "bold" }}>
                {" "}
                {`${item.first_name} ${item.last_name}`}
              </p>

              <p
                className="text"
                style={{ marginLeft: "1rem", color: "#C8C8C8" }}
              >
                {" "}
                {`${lastMessage.slice(0, 25)} ...`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
