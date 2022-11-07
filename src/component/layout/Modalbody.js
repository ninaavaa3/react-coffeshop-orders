import React from "react";
import classes from "./Modalbody.module.css";

const Modalbody = (props) => {
    let totalamount = 0;
    return (
        <div>
            {props.orders.map((order) => {
                totalamount += order.cost;

                return (
                    <ul>
                        <li className={classes.style}>
                            <h3 className={classes.h}>{order.foodname} </h3>
                            <h3 className={classes.h}>{`${order.cost} $`}</h3>
                            <p className={classes.h}>{`X ${order.number}`}</p>
                        </li>

                    </ul>)
            })}
          
        </div>
    )
}


export default Modalbody;