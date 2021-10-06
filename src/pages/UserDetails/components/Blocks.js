import React from "react";

export default function Blocks() {
  return (
    <div className="blocks">
      <div className="message-block">
        <i class="far fa-comment"></i>
        <h2>Message</h2>
      </div>
      <div className="call-block">
        <i class="fas fa-phone-alt"></i>
        <h2>Call</h2>
      </div>
      <div className="video-block">
        <i class="fas fa-video"></i>
        <h2>Video</h2>
      </div>
    </div>
  );
}
