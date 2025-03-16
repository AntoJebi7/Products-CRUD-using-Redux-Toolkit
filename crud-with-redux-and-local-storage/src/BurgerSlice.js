// slice and its reducers

import { createSlice } from "@reduxjs/toolkit"

const BurgerSlice = createSlice({
    name : "burgers",
    initialState :[],
    reducers : {
        addBurger: (state,action)=>{
            state.push({id:Date.now(),name :action.payload})
        },
        removeBurger : (state,action)=>{
            return state.filter(burger=>burger.id!==action.payload);
        },
    }
})

export const { addBurger, removeBurger } = BurgerSlice.actions
export default BurgerSlice.reducer
