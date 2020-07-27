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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import UserContext from "./context/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });


  useEffect(() => {
    const checklogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("http://localhost:4000/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:4000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checklogin();
  }, []);

  return (
    <div className="box">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}
