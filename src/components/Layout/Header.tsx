import React from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/main-image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props: any) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["header-image"]}>
                <img src={mealsImage} alt={"A table full of delicious ingredients"}/>
            </div>
        </React.Fragment>
    )
}

export default Header;