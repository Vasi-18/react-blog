import React from "react";
import img from "./banner.jpg";

const Header = () => {
  return (
    <div>
      <div className="row">
        <img src={img} alt="..." />
      </div>
    </div>
  );
};

export default Header;
