import React from "react";
import ReactDOM from "react-dom";

import classes from "./CartModal.module.css";

const Backdrop = (props: any) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props: any) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const CartModal = (props: any) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("overlays")!)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("overlays")!)}
        </React.Fragment>
    )
}

export default CartModal;
