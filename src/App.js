import React, { useEffect, useState } from "react";
import Header from "./component/layout/Header";
import List from "./component/ListOrder/List";
import Modal from "./component/layout/Modal";
import classes from "./App.module.css";

const App = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {

            try {
                const response = await fetch("https://react-http-669d9-default-rtdb.firebaseio.com//menu.json");
                if (!response.ok) {
                    throw Error(response.status);

                    const database = await response.json();
                    const data = [];
                    for (const key in database) {
                        data.push({
                            foodname: database[key].foodname,
                            explain: database[key].explain,
                            cost: database[key].cost,
                            id: key,
                            img: database[key].img
                        }
                        )
                    }
                    setState(data);
                }
                catch (err) { console.log(err) }
            }

        fetchMenu();


        }, [

        ]);


    const [newFood, setNewFood] = useState([]);

    const addfood = (food) => {
        let foodIndex = newFood.findIndex(fd => fd.id === food.id);
        if (foodIndex >= 0) {
            newFood[foodIndex].number += food.number;
            setNewFood([...newFood]);
        } else {
            setNewFood([...newFood, food]);
        }
    }

    return (
        <div>
            <Header />
            <div class={classes.list}>
                {state.map((food) => (
                    <List
                        Onfoodadded={addfood}
                        foodname={food.foodname}
                        explain={food.explain}
                        cost={food.cost}
                        foodid={food.id}
                        img={food.img}
                    />))}
            </div>

            <Modal orders={newFood} />
        </div>

    )
}
export default App;