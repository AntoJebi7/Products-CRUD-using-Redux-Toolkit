// slice and its reducers

import { createSlice } from "@reduxjs/toolkit"


let lc_db =JSON.parse(localStorage.getItem('burgers'))


const BurgerSlice = createSlice({
    name : "burgers",
    initialState :lc_db, // initial state 
    reducers : {
        addBurger: (state,action)=>{
            state.push({id:Date.now(),name :action.payload})
            localStorage.setItem("burgers",JSON.stringify([...state]))
        },
        removeBurger : (state,action)=>{
            let newTodo = state.filter(burger=>burger.id!==action.payload);
            localStorage.removeItem("burgers",JSON.stringify([...newTodo]))
            return newTodo
            
        },
    }
})

export const { addBurger, removeBurger } = BurgerSlice.actions
export default BurgerSlice.reducer
