import React,{ useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addBurger } from './BurgerSlice'
import BurgerList from "./BurgerList.jsx"

function App() {
  
  const [input, setInput] = useState("")
  
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux BurgerShop </h1>
      <input type="text" 
       placeholder='enter your burger type'
       value={input}
       onChange={(e)=>setInput(e.target.value)} 
       />

       <button
       onClick={()=>{
        if(input.trim()!==""){
          dispatch(addBurger(input))
          setInput("")
        }
       }}
       >
         Add Burger
       </button>
       <BurgerList/>
    </div>
  
  )
}

export default App
