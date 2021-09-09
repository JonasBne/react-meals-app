import React, {useState} from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
    const [amount, setAmount] = useState("0");

    function addMealHandler (ev: React.MouseEvent) {
        console.log(ev.target)
    }

    return (
        <form className={classes.mealItemForm}>
            <Input label={"Amount"} input={{
                id: "amount",
                type: "number",
                min: "1",
                max: "25",
                step: "1",
                defaultValue: "0"
            }}/>
            <button  className={classes.button} type={"button"} onClick={addMealHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;