import React from "react";
import Namecard from "../Namecard/Namecard";
import "./Result.css";

const Result = ({ rescontainer }) => {
  const suggestedjsx = rescontainer.map((contain) => {
    return <Namecard key={contain} namecard={contain} />;
  });
  return <div className="results-container">{suggestedjsx}</div>;
};

export default Result;
