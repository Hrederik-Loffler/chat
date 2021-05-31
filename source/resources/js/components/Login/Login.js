import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

import { Link } from "react-router-dom";
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const options = {
        email,
        password,
    }

    async function login(options) {
        try {
            const loginResp = await axios.post("/login", options);
            // setCurrentUser({ email: options.email, name: options.name });
            return loginResp;
        } catch (e) {
            return e.response;
        }
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const res = await login(options)


        if (res.status == 422) {
            setError(res.data.errors)
        } else {
            setError('')
            history.push("/join")
        }

    }


    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
            <h1 className="heading">Login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <input
                            name="email"
                            placeholder="email"
                            className="joinInput"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            placeholder="Password"
                            className="joinInput"
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div >
                        <button className="button mt-20" type="submit">
                            Login
                        </button>
                    </div>
                </form>
                <div className="link-login">
                    <p className="mt-2 mb-0 text-center">
                        Don't have an account yet?{" "}
                        <Link to="/">Register here</Link>.
                    </p>
                </div>
                {error ? (<div className="alert alert-danger mt-2"><p>{error}</p></div>) : '' }
            </div>
        </div>
    )
}

export default Login
