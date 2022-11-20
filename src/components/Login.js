import React, { useRef, useState } from "react";
import "../styles/Login.css";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (
            doc.data().username === user.username &&
            doc.data().password === user.password
          ) {
            dispatch(setUser(user));
            Navigate("/home");
          } else {
            setError("wrong");
          }
        });
      });
  };

  return (
    <div className="login-screen">
      <div className="login-bg">
        <div className="login-gradient"></div>
      </div>
      <div className="login-body">
        <div className="login-screen-form">
          <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <input
              className="input"
              ref={usernameRef}
              placeholder="Username"
              focused={focused.toString()}
              type="text"
              onFocus={() => setFocused(true)}
              onBlur={handleFocus}
              pattern="^[0][6][0-9]{8}$||^[0][8][0-9]{8}$||^[0][9][0-9]{8}$"
            />
            <p className="login-error">Username should be a phone number!</p>
            <input
              className="input"
              ref={passwordRef}
              placeholder="Password"
              type="password"
              focused={focused.toString()}
              onFocus={() => setFocused(true)}
              onBlur={handleFocus}
              pattern="^[A-Z][a-z]+$"
            />
            <p className="login-error">
              Password should start with uppercase letters, don't include
              special characters!
            </p>
            <button type="submit">Log In</button>
            <p className={error ? `login-error-dm ${error}` : "login-error-dm"}>
              Username or Password is incorrect!
            </p>
            <h4>
              <span className="login-grey">New to Website?</span>
              <Link className="login-link" to="/signup">
                <span className="login-link">Sign Up now.</span>
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
