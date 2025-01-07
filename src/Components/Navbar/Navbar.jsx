import React from "react";



function Navbar() {
  return (
    <div className="navbar">
      <h1 className="h1">The Dojo Blog</h1>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/create"> New Blog </a>
      </div>
    </div>
  );
}

export default Navbar;
