import React from "react";


import classes from "./Login.module.css";

const Login = () => {
    return (
        <form className={classes.login}>
           <label htmlFor={"emailInput"}>Username</label>
            <input id={"emailInput"} type={"email"} />
            <label htmlFor={"passwordInput"}>Password</label>
            <input id={"passwordInput"} type={"text"} />
            <button className={classes.button} type={"button"}>Log in</button>
        </form>
    )
}

export default Login;