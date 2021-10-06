import React from "react";
import { FiMoon } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import useLogin from "../../../hooks/useLogin";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const { logout } = useLogin();
  let history = useHistory();
  return (
    <div>
      <div className="icons">
        <FiMoon />
        <FiLogOut
          onClick={() => {
            logout();
            history.push("/login");
          }}
        />
      </div>
    </div>
  );
}
