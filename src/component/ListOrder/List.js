import React, { useState } from "react";
import classes from "./List.module.css";

const List = (props) => {
    const [state, setState] = useState(0);

    const Changestate = (event) => {
        if (event.target.value < 0) {
            return;
        }
        setState(parseInt(event.target.value));
    }
    const Savefood = () => {
        if (state > 0) {
            let foodcost = (props.cost) * state;

            const fooddetail = {
                foodname: props.foodname,
                cost: foodcost,
                number: state,
                Image: props.img,
                cost2: props.cost,
                id: props.foodid
            }
            props.Onfoodadded(fooddetail);
        } else {
            return;
        }
    }

    return (
        <div className="card" style={{ width: 350 }}>
            <img src={props.img} className="card-img-top" alt="1" />
            <div className="card-body">
                <h5 className="card-title">{props.foodname}</h5>
                <p className="card-text">{props.explain}</p>
                <p className="card-text">{`${props.cost} $`}</p>
                <input onChange={Changestate} type="number" value={state} className={classes.inputstyle} />
                <button onClick={Savefood} className={classes.btn}>+Add</button>
            </div>
        </div>

    )

}
export default List;