// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import MyComponent from "./Fetch";

const LoginPage = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    //if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleLogin(email, password);
    //};
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">Login</h2>
      <form action="" style={{ width: "400px" }} className="text-center">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@exam
            ple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-success mt-3 w-100">
          Login
        </button>
        <p className="login_text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
        <p className="login_text">
          OR{" "}</p>
        <button type="button" className="btn btn-outline-secondary w-100">
        <FaGoogle className="mx-3"/>  Continue with Google
        </button>
        <button type="button" className="btn btn-outline-secondary mt-1 w-100" onClick={() => navigate("/phone")}>
        <FaPhoneAlt className="mx-3"/> Continue with Phone
        </button>
      </form>
      {/* <MyComponent/> */}
    </div>
  );
};

export default LoginPage;
