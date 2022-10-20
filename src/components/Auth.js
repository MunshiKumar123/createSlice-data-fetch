import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <>
      <h2>Auth Component</h2>

      <form onSubmit={loginHandler}>
        Email Id: <input type="email" />
        <br />
        Password: <input type="password" />
        <br />
        <button className="btn btn-primary">Login</button>
      </form>
    </>
  );
};
export default Auth;
