import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import { Link } from 'react-router-dom'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginsignup-form">
      <form onSubmit={handleLogin}>
      <h1 className="text-center">Log in</h1>
        <div className="form-group">
          <label>
            Email
            <input className="form-control" name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password
            <input className="form-control" name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit" className="btn btn-dark">Log in</button>
        <div className="form-group"> &nbsp;
          <h6>No account?
            <Link to="/signup"> Create one</Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);