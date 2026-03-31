import { useState, useCallback , useEffect, useRef } from 'react'



function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //Correct (stores DOM reference without re-render)
  // useRef hook , provide extra functionality , that we use below
  const passwordRef=useRef(null)

  // for clipborad copy paste 
  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();  // when we click it will show the text is selected
    passwordRef.current?.setSelectionRange(0,101);  //define range that can be selected
    window.navigator.clipboard.writeText(password)
  },[password])

  //useCallback
// useCallback ensures function reference stays stable (prevents unnecessary runs)
  const passwordGenerator = useCallback(()=>{  // generating password  using callback , it optimizes by keeping function in cache to reduce again again recomputaion of function
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  // useEffect  => // runs passwordGenerator whenever length or options change
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto  mt-40 shadow-xl rounded-xl px-6 py-4 
      my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}  // will get by  passwordGenerator()
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          // useRef hook
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
