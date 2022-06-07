import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import login_img from "./images/login.jpg";
import { UserContext } from "./UserContextProvider";
import "./Login.css";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(undefined);

  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginUser;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log("Login Unsuccessful");
      setStatus({ type: "error" });
      setError("Error! Please enter correct email address or password.");
    } else {
      console.log("Login Successful");
      setStatus({ type: "success" });
<<<<<<< Updated upstream
      setError("Login Successful! You will be redirected to Courses page.");
=======
      setError("Login Successful! You will be redirected to courses page.");
>>>>>>> Stashed changes
      setTimeout(() => {
        navigate("/courses");
        dispatch({ type: "USER", payload: true });
        window.location.reload(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="login_left">
            <form className="login_form" method="POST" onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="loginemail"
                value={loginUser.email}
                onChange={handleInputs}
                required
                className="login_input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="loginpassword"
                value={loginUser.password}
                onChange={handleInputs}
                required
                className="login_input"
              />
              {status?.type === "error" && (
                <div className="login_error_msg">{error}</div>
              )}
              {status?.type === "success" && (
                <div className="login_success_msg">{error}</div>
              )}
              <button
                type="submit"
                className="green_btn"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="login_right">
            <h1>New Here ?</h1>
            <Link to="/register">
              <button type="button" className="white_btn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
