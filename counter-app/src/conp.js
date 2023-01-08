import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
const[fact,setfact]=useState("")
const[userInput,setUserInput]=useState()



function fnOnclick(){
 let var1= (e)=>setUserInput(e.target.value) 
    console.log("clicked!", var1)

}


  return (
    <div>
      <h1>Hello Hi </h1>
      <h2>Click to Get fact</h2>
      <input placeholder="Enter Number b/w 0-100" ></input>
      <button onClick={fnOnclick}>Click!</button>
      <p>{fact}</p>
    </div>
  );
}
