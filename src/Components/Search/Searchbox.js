import React from "react";
import "./Searchbox.css";

const Searchbox = ({ onchange }) => {
  return (
    <div className="searchbox">
      <input
        placeholder="Type Keywords"
        className="search-input"
        onChange={(event) => onchange(event.target.value)}
      />
    </div>
  );
};

export default Searchbox;
