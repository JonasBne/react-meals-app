import React from "react";

import classes from "./HeaderLogin.module.css";

const HeaderLogin = () => {

    return (
        <React.Fragment>
            <header className={classes["header-login"]}>
                <h1>ReactMeals</h1>
                <div>
                    <button className={classes.button}>Log in</button>
                </div>
            </header>
        </React.Fragment>
    )
}

export default HeaderLogin;