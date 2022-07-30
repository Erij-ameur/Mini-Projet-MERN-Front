
import './App.css';
import { useState, useEffect } from 'react';

const Component = (props) => {
  const [value1, setvalue1] = useState("first")
  const [value2, setvalue2] = useState("second")
  const [value3, setvalue3] = useState("third")

  useEffect(
    () => {
      
    }, [value1,value2,value3]
  )
  return (
    <div className="App">
      <input onChange={(event) => {
        setvalue1(event.target.value)
      }} type={"text"}></input>

      <input onChange={(event) => {
        setvalue2(event.target.value)
      }} type={"text"}></input>

      <input onChange={(event) => {
        setvalue3(event.target.value)
      }} type={"text"}></input>



<button onClick={()=>{
  setvalue1("")
  setvalue2("")
  setvalue3("")
}}>Reset</button>

      <h1>{value1}</h1>
      <h1>{value2}</h1>
      <h1>{value3}</h1>

    </div>
  );
}
export default Component;