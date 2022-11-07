import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login.component";

function Home() {
  const adminUser = {
    username: "admin",
    password: "admin",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Loginin = (details) => {
    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({ username: details.username, password: details.password });
      localStorage.setItem("username", details.username);
      localStorage.setItem("authenticated", true);

      navigate("/display");
    } else {
      setError("Wrong username or password !");
    }
  };

  const Logout = () => {
    setUser({ username: "" });
    localStorage.clear();
  };

  return (
    <div>
      {user.username !== "" ? (
        <div>
          <h2>
            Welcome <span>{user.username}</span>
          </h2>
          <hr />
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <Login Loginin={Loginin} error={error} />
      )}
    </div>
  );
}

export default Home;
