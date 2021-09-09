import React from "react";
import CartModal from "./CartModal";

import classes from "./Cart.module.css";

const Cart = (props: any) => {
    const cartItems = <li>
        <h4>Sushi</h4>
        <p>€12,99</p>
    </li>;

    return (
        <CartModal onClose={props.onHideCart}>
            <ul className={classes["cart-items"]}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>€35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
                <button className={classes.button} onClick={props.onHideCart}>Order</button>
            </div>
        </CartModal>
    )
}

export default Cart;