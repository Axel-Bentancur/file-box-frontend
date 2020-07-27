import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Usercontext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserdata } = useContext(Usercontext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/");
  const logout = () => {
    setUserdata({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div>
      {userData.user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <div>
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}
