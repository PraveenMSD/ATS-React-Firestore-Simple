import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";
import { Link } from 'react-router-dom'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="loginsignup-form">
      <form onSubmit={handleSignUp}>
        <h1 className="text-center">Sign up</h1>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <div className="form-group"> &nbsp;
          <h6>Already have account?
            <Link to="/login"> Sign in</Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);