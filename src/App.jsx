import React,{useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import './App.css';

export const App = () => {
  const [navbarTitle, setNavBarTitle] = useState("The Dojo Blog")
  return (
    <div className="App">
      <Navbar title={navbarTitle} />
      <div className="content">
        <Home setNavBarTitle={setNavBarTitle} />

      </div>
    </div>
  );
};
