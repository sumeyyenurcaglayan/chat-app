import React from "react";

import { UserContext } from "../../../context/login";

export default function Messages() {
  const { selectedUser } = React.useContext(UserContext);

  return (
    <div className="messages left-side-messages">
      {selectedUser
        ? selectedUser.messages.map((message) => {
            return (
              <div className="left-side-message">
                <p>{message.text}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
