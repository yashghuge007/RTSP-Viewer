import React from "react";
import "./StreamPlayer.css";

const StreamPlayer = ({ url }) => {
  return (
    <div className="stream-player">
      <p>
        <strong>Stream:</strong> {url}
      </p>
      <div className="placeholder">
        <p>Stream display coming soon...</p>
      </div>
    </div>
  );
};

export default StreamPlayer;

