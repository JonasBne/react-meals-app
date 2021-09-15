import React from "react";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

interface IProps {
    onShowCart: () => void;
    onLogout: () => void;
}

const Header = (props: IProps) => {


    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Yummy</h1>
            <span>
                <HeaderCartButton onClick={props.onShowCart} className={classes.cart}/>
                <button type={"button"} onClick={props.onLogout}>Log out</button>
            </span>
        </header>

    )
}

export default Header;