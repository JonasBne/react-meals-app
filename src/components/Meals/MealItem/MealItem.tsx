import React from "react";

import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";

interface Meal {
    id: string,
    name: string,
    description: string,
    price: number
}

interface IProps {
    meals: Array<Meal>
}

const MealItem = (props: IProps) => {
    return (
        <React.Fragment>
            {
                props.meals.map((item: Meal) => {
                    return <li className={classes.mealItem} key={item.id}>
                           <div>
                               <h4>{item.name}</h4>
                                <p className={classes.description}>{item.description}</p>
                                <p className={classes.price}>€{item.price}</p>
                           </div>
                           <div>
                               <MealItemForm/>
                           </div>
                    </li>})
            }
        </React.Fragment>
    )
}

export default MealItem;