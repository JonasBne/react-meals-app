import React from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
    return (
        <form className={classes.mealItemForm}>
            <Input label={"Amount"} input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "25",
                step: "1",
                defaultValue: "1"
            }}/>
            <button  className={classes.button} type={"button"}>+ Add</button>
        </form>
    )
}

export default MealItemForm;