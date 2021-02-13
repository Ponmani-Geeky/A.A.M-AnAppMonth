import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Result from "./Components/Resultcontainer/Result";
import Searchbox from "./Components/Search/Searchbox";

const name = require("@rstacruz/startup-name-generator");
function App() {
  const [headname, setHeadname] = useState("Name It!");
  const [headvalue, setHeadvalue] = useState({ head: true, suggestedname: [] });

  const handleInputChange = (input) => {
    setHeadvalue({
      head: !input,
      suggestedname: input.length > 0 ? name(input) : [],
    });
  };
  return (
    <div className="App">
      <div>
        <Header headtitle={headname} headtype={headvalue.head} />
        <Searchbox onchange={handleInputChange} />
        <Result rescontainer={headvalue.suggestedname} />
      </div>
    </div>
  );
}

export default App;
