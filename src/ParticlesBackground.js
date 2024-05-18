// ParticlesBackground.js
import React from 'react';

const ParticlesBackground = () => {
  return (
    <div
      className="background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "url('/background.jpg')", // Corrected path with escaped backslashes
        opacity: 0.1, // Adjust opacity to make the image low visible
        zIndex: -1, // Ensure the background is behind other elements
        backgroundColor: "transparent", // Set background color to transparent
      }}
    ></div>
  );
};

export default ParticlesBackground;
