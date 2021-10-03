import React from "react";
import { UserContext } from "../../../context/login";
import { useHistory } from "react-router-dom";

export default function UserHeader() {
  let history = useHistory();
  const { selectedUser } = React.useContext(UserContext);

  if (!selectedUser) return null;

  return (
    <div className="header">
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
