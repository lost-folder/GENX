import React from "react";



function Navbar({title}) {
  return (
    <div className="navbar">
      <h1 className="h1">{title}</h1>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/create"> New Blog </a>
      </div>
    </div>
  );
}

export default Navbar;
