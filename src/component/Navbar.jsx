import React from "react";
import "../App.css";

const Navbar = ({ setToken}) => {
  const logOutHandler = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <div className="navbar">
      <div className="links">
        <h1>Your Shopping Needs</h1>
        

        <button className="log-out-btn" onClick={() => logOutHandler()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
