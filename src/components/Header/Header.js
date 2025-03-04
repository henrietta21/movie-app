import "./Header.css";
import React from "react";
import Logo from "../../images/MyTestApp.png";

function Header() {
  return (
    <div className="container">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Header;
