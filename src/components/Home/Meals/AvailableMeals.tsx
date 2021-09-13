import React from "react";

import classes from "./AvailableMeals.module.css"
import MealItem from "../Meals/MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.50,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals =  () => {
    return (
        <section>
            <ul className={classes.mealsList}>
                <MealItem meals={DUMMY_MEALS} />
            </ul>
        </section>
    )
}

export default AvailableMeals;