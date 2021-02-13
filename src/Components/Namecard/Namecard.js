import React from "react";
import "./Namecard.css";

const namecheap = "https://www.namecheap.com/domains/registration/results/";
const Namecard = ({ namecard }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${namecheap}${namecard}`}
    >
      <div className="result-card">
        <p className="result-name">{namecard}</p>
      </div>
    </a>
  );
};

export default Namecard;
