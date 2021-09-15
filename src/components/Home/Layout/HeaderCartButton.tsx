import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props: any) => {

    return (
        <button className={classes.button} onClick={props.onClick}>
            <FontAwesomeIcon icon={faShoppingCart} className={classes.icon} />
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;