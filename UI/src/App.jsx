import { useState } from "react";
import "./App.css";
import { StreamPlayer } from "./components";

const App = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [streams, setStreams] = useState([]);

  const handleAddStream = () => {
    if (!inputUrl.trim()) return;
    setStreams([...streams, inputUrl.trim()]);
    setInputUrl("");
  };

  return (
    <div className="App">
      <h1>RTSP Stream Viewer</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter RTSP Stream URL"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={handleAddStream}>Add Stream</button>
      </div>

      <div className="grid">
        {streams.map((url, index) => (
          <StreamPlayer key={index} url={url} />
        ))}
      </div>
    </div>
  );
};

export default App;

