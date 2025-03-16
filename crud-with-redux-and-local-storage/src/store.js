// store and its reducers
import BurgerReducer from "./BurgerSlice"
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer : {
        burgers : BurgerReducer,
    }
})