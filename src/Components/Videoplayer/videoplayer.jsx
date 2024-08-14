import React, { useRef } from "react";
import "./videoplayer.css";
import Video from "../../assets/university.mp4";

const VideoPlayer = ({ playstate, setPlaystate }) => {
  const player = useRef(null);
  const Stopvideo = (e) => {
    if (e.target === player.current) {
      setPlaystate(false);
    }
  };
  return (
    <div
      className={`video-player ${playstate ? "" : "hide"}`}
      ref={player}
      onClick={Stopvideo}
    >
      <video src={Video} autoPlay muted controls alt="University Video" />
    </div>
  );
};

export default VideoPlayer;
