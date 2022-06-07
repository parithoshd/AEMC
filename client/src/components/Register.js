import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import Register_img from "./images/Register.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = newUser;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      setError("Registration Unsuccessful");
      setStatus({type:"error"});
    } else {
        setStatus({type:"success"});
        setError("Registration Successful! Redirecting to login.");
        setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className="white_btn">
                Sign in
              </button>
            </Link>
          </div>
          <div className="right">
            <form
              className="form_container"
              method="POST"
              onSubmit={handleSubmit}
            >
              <h1>Create Account</h1>
              {status?.type === "error" && (
                <div className="error_msg">{error}</div>
              )}
              {status?.type === "success" && (
                <div className="success_msg">{error}</div>
              )}
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={newUser.firstName}
                onChange={handleInputs}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={newUser.lastName}
                onChange={handleInputs}
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={newUser.email}
                onChange={handleInputs}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={newUser.password}
                onChange={handleInputs}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                required
                className="input"
              />
              
              <button type="submit" className="green_btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
