import React from "react";
import "./Loader.css"; // Styling for the loader

export const Loader = () => {
  return (
    <div className="Loader-Overlay">
      <div className="Loader">
        <div className="Spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};
