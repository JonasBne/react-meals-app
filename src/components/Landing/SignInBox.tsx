import React, {ChangeEvent, useEffect, useReducer, useState} from "react";

import classes from "./SignInBox.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faApple} from "@fortawesome/free-brands-svg-icons";

interface IProps {
    onSwitchToSignUp: () => void;
}

interface State {
    value: string,
    emailIsValid?:  undefined | boolean,
    passwordIsValid?: undefined | boolean
}

interface Action {
    type: string,
    val?: any
}


const formReducer = (state: State, action: Action) => {
    if (action.type === "EMAIL_INPUT") {
        return {
            value: action.val,
            emailIsValid: action.val.includes("@")
        }
    } else if (action.type === "EMAIL_BLUR") {
        return {
            value: state,
            emailIsValid: state.value.includes("@")
        }
    } else if (action.type === "PASSWORD_INPUT") {
        return {
            value: action.val,
            passwordIsValid: action.val.trim().length>3
        }
    } else if (action.type === "PASSWORD_BLUR") {
        return {
            value: state,
            passwordIsValid: state.value.trim().length>3
        }
    } else {
        return {
            value: "",
            emailIsValid: false,
            passwordIsValid: false
        }
    }
};


const SignInBox = (props: IProps) => {
    const [formState, dispatchForm] = useReducer(formReducer, {value: "", emailIsValid: undefined, passwordIsValid: undefined});

    const [formIsValid, setFormIsValid] = useState(false);

    function emailChangeHandler (ev: ChangeEvent<HTMLInputElement>) {
        dispatchForm({type: "EMAIL_INPUT", val: ev.target.value})
    }

    function passwordChangeHandler (ev: ChangeEvent<HTMLInputElement>) {
        dispatchForm({type: "PASSWORD_INPUT", val: ev.target.value})
    }

    function validatePasswordHandler () {
        dispatchForm({type: "PASSWORD_BLUR"})
    }

    function validateEmailHandler () {
        dispatchForm({type: "EMAIL_BLUR"});
    }

    const {emailIsValid, passwordIsValid} = formState;

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Checking validity of form...");
            setFormIsValid(emailIsValid && passwordIsValid)
        }, 500);

        return () => {
            console.log("Cleanup");
            clearTimeout(timer);
        }
    }, [emailIsValid, passwordIsValid])

    function switchToSignUp () {
        props.onSwitchToSignUp();
    }

    return (
            <form className={[classes["sign-in-container"], classes["form-container"]].join(' ')}>
                <h1>Sign in</h1>
                <div className={classes["social-container"]}>
                    <a className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a className="social"><FontAwesomeIcon icon={faApple} /></a>
                </div>
                <span>or use your account</span>
                <input className={`${formState.emailIsValid === false ? classes["input-invalid"] : ''}`} type="email" placeholder="Email" onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
                <input className={`${formState.passwordIsValid === false ? classes["input-invalid"] : ''}`} type="password" placeholder="Password" onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
                <a onClick={switchToSignUp}>Don't have an account? Sign up here!</a>
                <button type={"submit"} className={classes["button-action"]} disabled={!formIsValid}>Sign In</button>
            </form>
    )
}

export default SignInBox;