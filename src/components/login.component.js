import React, { useState } from "react";

function Login({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  console.log(details);
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form>
      <h3>Sign In</h3>
      {error !== "" ? <div>{error}</div> : ""}
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="username"
          placeholder="Enter email"
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          value={details.username}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="index.html">password?</a>
      </p>
    </form>
  );
}

export default Login;
