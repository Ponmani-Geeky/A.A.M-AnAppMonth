import React from "react";
import "./Header.css";

const Header = ({ headtitle, headtype }) => {
  return (
    <div>
      <div className="head-container">
        <img
          src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
          className={`head-image ${
            headtype ? `head-extended` : `head-shirnked`
          }`}
          alt="headerimage"
        />
        <h1
          className={`head-text ${
            headtype ? `head-text-extended` : `head-text-shrinked`
          }`}
        >
          {headtitle}
        </h1>
      </div>
    </div>
  );
};

export default Header;
