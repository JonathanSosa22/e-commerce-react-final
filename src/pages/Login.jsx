import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="box">
          <span className="borderLine"></span>
          <form>
            <h1>Login</h1>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>User name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
