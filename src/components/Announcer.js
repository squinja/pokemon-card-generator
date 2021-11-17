import React from "react";
import "./Announcer.css";

const Announcer = ({ message }) => {
  return (
    <div className="announcer" role="region" aria-live="polite">
      {message}
    </div>
  );
};

export default Announcer;
