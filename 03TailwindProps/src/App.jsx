import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username : "Prateek",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black 
      p-6 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username=" hello" btnt="Click me"/>
      <Card username="Prateek" />
    </>
  )
}

export default App
