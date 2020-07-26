/* import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import CreateUser from "./components/CreateUser";
import CreateBox from "./components/CreateBox";
import Search from "./components/Search";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Route path="/" component={Navigation} />
      <div className="container p-4">
        <Route path="/user/signup" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/box" component={CreateBox} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App; */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";


export default function App() {
  return (
    <div className="box">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
