import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create/Create"
import { BlogDetails } from "./Components/Blog/BlogDetails";
import { ErrPage } from "./errPage";
export const App = () => {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <ErrPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
