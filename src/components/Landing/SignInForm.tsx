import React from "react";

import classes from "./SignInForm.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faApple} from "@fortawesome/free-brands-svg-icons";

interface IProps {
    onSwitchToSignUp: () => void;
}


const SignInForm = (props: IProps) => {
    function switchToSignUp () {
        props.onSwitchToSignUp();
    }

    return (
        <div className={[classes["sign-in-container"], classes["form-container"]].join(' ')}>
            <form action="#">
                <h1>Sign in</h1>
                <div className={classes["social-container"]}>
                    <a href="#" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#" className="social"><FontAwesomeIcon icon={faApple} /></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#" onClick={switchToSignUp}>Don't have an account? Sign up here!</a>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default SignInForm;