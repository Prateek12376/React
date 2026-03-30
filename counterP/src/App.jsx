import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const[counter,setCounter]=useState(10)

  //let counter = 5

  const IncreaseV = ()=>{
    console.log("value added", counter)
    // counter=counter+1
    setCounter(counter<20?counter+1: counter)
  } 

  const decreaseV = ()=>{
    console.log("value subtracted",counter)
    // counter=counter-1
    setCounter(counter>0?counter-1: counter)
  }

  return (
    <>
      <h1>Counter function by useState</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={IncreaseV}>Increase value</button>
      <br/>
      <button
      onClick={decreaseV}>Decrease value</button>
    </>
  )
}

export default App
