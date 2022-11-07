import React from "react";
import classes from './HeaderCartButton.module.css';
import { ReactComponent as BuyItem } from './shopping.svg'

const HeaderCartButton = (props) => {
    return (
        <>
            <button data-toggle="modal" data-target="#exampleModal" className={classes.button}>
               
                <h3>your cart</h3>
                
                    <BuyItem  className={classes.icon}/>
               
            </button>
        </>
    );

}
export default HeaderCartButton;