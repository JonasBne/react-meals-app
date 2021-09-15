import React, {useReducer} from "react";

import classes from "./SignUpBox.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faApple} from "@fortawesome/free-brands-svg-icons";

interface IProps {
    onSwitchToSignIn: () => void;
}

const SignUpBox = (props: IProps) => {


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
                <input type={"text"} placeholder={"First name"} />
                <input type={"text"} placeholder={"Last name"} />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#" onClick={switchToSignIn}>Already have an account? Sign in here!</a>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpBox;