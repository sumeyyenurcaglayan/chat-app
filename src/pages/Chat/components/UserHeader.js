import React from "react";
import { UserContext } from "../../../context/login";
import { useHistory } from "react-router-dom";

export default function UserHeader() {
  let history = useHistory();
  const { selectedUser } = React.useContext(UserContext);

  if (!selectedUser) return null;

  return (
    <div className="header">
      <div
        className="image"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50px",
          backgroundColor: "#C4C4C4",
        }}
      ></div>
      <p>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p>
      <button
        onClick={() => {
          history.push("/user/" + selectedUser.id + "/details");
        }}
      >
        <i
          class="fas fa-ellipsis-h"
          style={{ fontSize: "20px", cursor: "pointer" }}
        ></i>
      </button>
    </div>
  );
}
