import React from "react";

type Meal = {
    id: string,
    name: string,
    description: string,
    price: number
}

interface IProps {
    meals: Array<Meal>
}


const AvailableMeals =  (props: IProps) => {
    return (
        <React.Fragment>
            <ul>
                {
                    props.meals.map((item: Meal) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default AvailableMeals;