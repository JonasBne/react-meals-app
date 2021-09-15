import React, {useReducer} from "react";

import classes from "./Register.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faApple} from "@fortawesome/free-brands-svg-icons";

interface IProps {
    onSwitchToSignIn: () => void;
}

interface State {
    value: "",
    usernameIsValid?: undefined | boolean,
    emailIsValid?: undefined | boolean,
    passwordIsValid?: undefined | boolean
}

interface Action {
    type: string,
    val?: any
}

const formReducer = (state: State, action: Action) => {
    if (action.type === "USERNAME_INPUT") {
        return {
            value: action.val,
            usernameIsValid: action.val.trim().length>5
        }
    } else if (action.type === "USERNAME_BLUR") {
        return {
            value: state.value,
            usernameIsValid: state.value.trim().length>5
        }
    } else if (action.type === "EMAIL_INPUT") {
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
            passwordIsValid: state.value.trim().length > 3
        }
    } else {
        return {
            value: "",
            usernameIsValid: false,
            emailIsValid: false,
            passwordIsValid: false
        }
    }
}

const Register = (props: IProps) => {
    // todo: finalize validation
    //const [formState, dispatchForm] = useReducer(formReducer, {value: "", usernameIsValid: undefined, emailIsValid: undefined, passwordIsValid: undefined});


    function switchToSignIn () {
        props.onSwitchToSignIn();
    }

    return (
        <div className={[classes["sign-up-container"], classes["form-container"]].join(' ')}>
            <form action="#">
                <h1>Create Account</h1>
                <div className={classes["social-container"]}>
                    <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faApple} /></a>
                </div>
                <span>or use your email address for registration</span>
                <input type={"text"} placeholder={"Username"} />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#" onClick={switchToSignIn}>Already have an account? Sign in here!</a>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Register;