import React from "react";
import { UserContext } from "../../../context/login";

export default function UserHeader() {
  const { selectedUser } = React.useContext(UserContext);
  if (!selectedUser) return null;
  return (
    <>
      <div className="details-close">
        <i class="fas fa-times"></i>
      </div>
      <div className="details-header">
        <div className="details-user-info">
          <div className="details-image"></div>
          <div className="details-name-last">
            <p>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p>
            <h2>Last Seen 2 hours ago</h2>
          </div>
        </div>
      </div>
    </>
  );
}
