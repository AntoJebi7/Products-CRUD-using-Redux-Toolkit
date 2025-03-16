import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBurger } from "./BurgerSlice";

const BurgerList = ()=>{
    const getburgers = useSelector((state)=>state.burgers)
    // fetches burgers from Redux and shows them in BurgerList.js
    const dispatch = useDispatch();
    return (
        <div>
            <h1>burger list</h1>
            <ul>
                {
                    getburgers.map((burger)=>(
                        <li key={burger.id}>{burger.name} <button
                        onClick={()=>dispatch(removeBurger(burger.id))}
                        >
                            remove
                            </button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BurgerList;