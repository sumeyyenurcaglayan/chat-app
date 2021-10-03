import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./index.css";

export default function Login() {
  const { user, login } = useLogin();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { pathname } = useLocation();

  let history = useHistory();

  if (user && pathname === "/login") return <Redirect to="/chat" />;

  return (
    <div className="login-texts">
      <input
        id="textUserName"
        className="login-text"
        type="text"
        name="username"
        placeholder="User Name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        id="textFirstName"
        className="login-text"
        placeholder="First Name"
        type="text"
        name="first_name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        id="textLastName"
        placeholder="Last Name"
        className="login-text"
        type="text"
        name="last_name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button
        id="btn"
        onClick={() => {
          login({
            username,
            firstName,
            lastName,
          });
          history.push("/chat");
        }}
      >
        LOGIN
      </button>
    </div>
  );
}
