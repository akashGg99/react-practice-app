import {useState} from 'react'
import './App.css';

function App() {

  let [var1,setvar1] = useState(0)

const IncreaseVar = function(){
  setvar1(var1=var1+1)
  console.log("inc",var1)
}

const DecreaseVar= function(){
  setvar1(--var1)
  console.log("dec",var1)
}

  return (
    <div className="App">
      <h1>Hello hi</h1>
      <p>Click Counter</p>
      <p id="var1">{var1}</p>
      <button onClick={IncreaseVar}>Up!</button>
      <button onClick={DecreaseVar}>Down!</button>
    </div>
  );
}


function component2(props){

  return(
    <div>
      <p>content2  {props.title}</p>
    </div>
  )
}



export default App;

