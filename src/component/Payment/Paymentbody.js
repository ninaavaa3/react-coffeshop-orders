import React, { useState } from "react";
import { ReactComponent as Trash } from '../../asset/trash.svg'
import classes from "./Payment.module.css"

const Paymentbody = (props) => {
    const [state, setState] = useState(props.number);
    const positive = (e) => {
        if (e.target.value < 0) {
            return;
        } else
            if (e.target.value === 0) {
                delet()
            }

        if (props.onQuantityChanged)
            props.onQuantityChanged(props.foodid, e.target.value);

        setState(e.target.value);
    };

    const delet = () => {
        props.ondelethandler(props.foodname)
    }

    let costnum = (props.cost) * state;
    //    let costnums="";
    //     let filteredorder=props.filteredorders;
    //     for(let i = 0; i < filteredorder.length; i++){
    //          costnums+=(filteredorder[i].cost)*(filteredorder[i].state)
    //     }
    //     props.set(costnums);
    return (
        <div>
            <div className={classes.pay} >
                <img className={classes.Imagestyle} src={props.Image} alt={"alekimige"} />
                <h2 className={classes.fontnumber}>{costnum}$</h2>
                <h2 className={classes.fontname}>{props.foodname}</h2>
                <input className={classes.inputstyle} type='number' onChange={positive} value={state} />
                <Trash onClick={delet} width={25} height={25} />
            </div>
        </div>
    );
}
export default Paymentbody;