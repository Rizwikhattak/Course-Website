import React from "react";

const AutoPlayVideo = () => {
  return (
    <div
      className="video-container"
      style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src="https://www.youtube.com/embed/KGdaJgrXsYI?autoplay=1&mute=1&loop=1&playlist=KGdaJgrXsYI&controls=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default AutoPlayVideo;
