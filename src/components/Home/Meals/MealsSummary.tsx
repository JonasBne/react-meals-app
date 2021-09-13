import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <React.Fragment>
            <div className={classes.summary}>
                <h2>Delicious food, delivered at your doorstep!</h2>
                <p>Choose your favorite meal from a broad selection of dishes and enjoy a delicious lunch or dinner at home.
                    All our meals are cooked with high-quality ingredients, just-in-time by our experienced chefs!
                </p>
            </div>
        </React.Fragment>
    )
}

export default MealsSummary;