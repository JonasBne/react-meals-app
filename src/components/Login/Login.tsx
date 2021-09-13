import React, {ChangeEvent, useEffect, useState} from "react";


import classes from "./Login.module.css";


const Login = (props: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameIsValid, setUsernameIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);

    function usernameChangeHandler(ev: ChangeEvent<HTMLInputElement>) {
        setUsername(ev.target.value);
    }

    function passwordChangeHandler(ev: ChangeEvent<HTMLInputElement>) {
        setPassword(ev.target.value)
    }

    useEffect(() => {
        if (username.trim().length > 0 && username.includes("@")) {
            setUsernameIsValid(true);
        } else if (password.trim().length > 0) {
            setPasswordIsValid(true);
        }
    }, [username, password]);

    function submitHandler() {
        if (usernameIsValid && passwordIsValid) {
            props.onLogin(true)
        } else {
            props.onLogin(false)
        }
    }

    return (
        <form className={classes.login}>
           <label htmlFor={"emailInput"}>Username</label>
            <input id={"emailInput"} type={"email"} onChange={usernameChangeHandler} />
            <label htmlFor={"passwordInput"}>Password</label>
            <input id={"passwordInput"} type={"text"} onChange={passwordChangeHandler} />
            <button className={classes.button} type={"button"} onClick={submitHandler}>Log in</button>
        </form>
    )
}

export default Login;