import React from "react";

export default function MessageInput() {
  return (
    <div className="message-input">
      <form>
        <input
          className="chat-send-text"
          type="text"
          name="name"
          placeholder="Type"
        />
        <button className="chat-send-button">Send</button>
      </form>
    </div>
  );
}
