import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-l">
            <div className="b-logo">
              <span>
                <a href="/">DEMO Streaming</a>
              </span>
            </div>
          </div>
          <div className="header-r">
            <div className="b-login">
              <a href="#">Login</a>
            </div>
            <div className="b-license">
              <a href="#">Start your free trial</a>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <span className="b-title">Popular title</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
