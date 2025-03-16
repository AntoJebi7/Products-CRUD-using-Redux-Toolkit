import React,{ useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { addBurger } from './BurgerSlice'
import BurgerList from "./BurgerList.jsx"


// to prevent data from losing after refresh from local storage
if(!localStorage.getItem("burgers")){
  localStorage.setItem("burgers",JSON.stringify([]))
}
// it only accepts json data
// so json to string

// for getting item , we just call key
// its datatype is string, so convert into json
// so to parse
let lcData = JSON.parse(localStorage.getItem("burgers"))
console.log(lcData)

// to remove
//localStorage.removeItem("burgers")



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
