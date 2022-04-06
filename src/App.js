import React, { useState } from "react";
//importing components
import Song from "./components/Song";
import Player from "./components/Player";
//stylesheet
import "./Styles/app.scss";
//util.js--> app data
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState();
  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
