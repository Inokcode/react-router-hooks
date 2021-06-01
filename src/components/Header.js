import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="ui three item menu">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/about">About</Link>
        </div>
        <div className="item">
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
