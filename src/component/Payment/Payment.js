import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Paymentbody from "./Paymentbody";
import classes from "./Payment.module.css";

const Payment = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [filteredorder, setFilteredorder] = useState(location.state.detail.orders);

    const calculateTotalAmount = () => {
        let total = 0;
        filteredorder.map(order => {
            total += order.cost;
        });

        return total;
    }

    const totalAmount = useMemo(() => calculateTotalAmount(), [filteredorder]);

    const deletHandler = (a) => {
        const filterorder = filteredorder.filter(ord => ord.foodname !== a);
        setFilteredorder(filterorder);
    }

    const backtohome = () => {
        history.push({
            pathname: '/',
            state: { detail: filteredorder }
        });
    }

    const quantityChanged = (foodid, newval) => {
        let foodIndex = filteredorder.findIndex(fd => fd.id === foodid);
        let currentItem = filteredorder[foodIndex];
        currentItem.number = newval;
        currentItem.cost = currentItem.cost2 * newval;

        setFilteredorder([...filteredorder]);
       
    }
    const gotopay=()=>{
        history.push("/payment");
    }

    return (
        <div className={classes.container}>
            {filteredorder.map((order) => {
                return (
                    <div className={classes.containercomponent}>
                        <Paymentbody foodid={order.id} Image={order.Image} foodname={order.foodname} cost={order.cost2} ondelethandler={deletHandler} number={order.number} onQuantityChanged={quantityChanged} />
                    </div>
                )
            })}

            <hr />
            <div className={classes.btns}>
                <button onClick={backtohome} className={classes.btn}>back to coffe</button>
                <button onClick={gotopay} className={classes.btn}>confirm</button>
                <h3 className={classes.h}>total Amount: <span className={classes.spa}>{totalAmount}$</span></h3>
            </div>
        </div>
    );
}

export default Payment;