import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from './Modal.module.css'

const BackDrop = (props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onClick}></div>
    )
}

const Overlay = (props)=>{
    return(
        <div className={classes.modal}>
            <div classes={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal =(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>,document.getElementById('overlayes'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlayes'))}
        </Fragment>
    )

}
export default Modal;

