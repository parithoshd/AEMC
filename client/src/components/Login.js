import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import login_img from './images/login.jpg'
import { UserContext } from './UserContextProvider'
import './Login.css'

const Login = () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate()

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    let name, value
    const handleInputs = (e) => {
        name = e.target.name
        value = e.target.value

        setLoginUser({ ...loginUser, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = loginUser

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })



        const data = await res.json()
        if (res.status === 400 || !data) {
            window.alert("Login Unsuccessful")
            console.log("Login Unsuccessful")
            setError("Invalid Credentials")
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("Login Successful")
            console.log("Login Successful")
            navigate('/')
        }

    }

    return (
        <>

            <div className="login_container">
                <div className="login_form_container">
                    <div className="login_left">
                        <form className="login_form" method='POST' onSubmit={handleSubmit}>
                            <h1>Login to Your Account</h1>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                id='loginemail'
                                value={loginUser.email}
                                onChange={handleInputs}
                                required
                                className="login_input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                id='loginpassword'
                                value={loginUser.password}
                                onChange={handleInputs}
                                required
                                className="login_input"
                            />
                            {error && <div className="login_error_msg">{error}</div>}
                            <button type="submit" className="green_btn" onClick={handleSubmit}>
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
    )
}

export default Login