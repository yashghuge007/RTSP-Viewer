import React, { useEffect, useRef } from "react";
import "./StreamPlayer.css";

const StreamPlayer = ({ url }) => {
  const canvasRef = useRef(null);
  const playerRef = useRef(null);
  useEffect(() => {
    // Encode URL safely to pass to backend route
    console.log(canvasRef);
    console.log(playerRef);
    const encodedUrl = encodeURIComponent(url);
    const wsUrl = `ws://localhost:8000/ws/stream/${encodedUrl}/`; //dummy url

    //uncomment below when backend is ready
    const socket = new WebSocket(wsUrl);
    socket.binaryType = "arraybuffer"; // AS jsmPEG EXPECTS arraybuffer as an input, also raw video might corrupt when transmitted as string/blob

    // Wait for canvas to mount
    if (canvasRef.current) {
      playerRef.current = new window.JSMpeg.Player(socket, {
        canvas: canvasRef.current,
        autoplay: true,
        audio: false,
        loop: true,
      });
    }

    //close before exiting
    return () => {
      socket.close();
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [url]);
  return (
    <div className="stream-player">
      <p>
        <strong>Stream:</strong> {url}
      </p>
      <canvas ref={canvasRef} width="640" height="360" />
      {/* <div className="placeholder">
        <p>Stream display coming soon...</p>
      </div> */}
    </div>
  );
};

export default StreamPlayer;

