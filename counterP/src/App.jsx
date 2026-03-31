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
    // setCounter(counter>0?counter-1: counter)  // if we use it multiple time still subtract 1 only , becuase it uses , snapshot that has come at starting, the renders 
    setCounter((prevcounter)=> prevcounter-1)  // if we use it multiple times suppose 3  rties , then update will be -3, becz here we are doing by function , in this it occur step by step , and step is depends on prev step , and in the end , it rerender
  }

//   All setState calls are queued first, then React renders once.
// If we use functional updates, each update uses the latest value from the queue, so total change becomes -3 (if called 3 times).”

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
