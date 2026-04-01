import { useState } from 'react'
import { InputBox } from './components'
import './App.css'
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"
import bgImage from "./assets/bg.jpg"
import leftImage from "./assets/left.jpg"
function App() {
  
  const[amount,setAmount]= useState(0)

  const [from,setFrom]=useState("USD")
  const[to,setTo]=useState("INR")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo= useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap= ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  // on button click
  const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(${bgImage})`,
        }}
    >
      {/* new flex container8*/}
        <div className="w-full h-full flex">
          {/*left half*/}
          <div className="w-1/2 h-full flex items-center justify-center">
            <img
              src={leftImage}
              className="w-[70%] h-[70%] object-cover rounded-lg brightness-75"
            />
          </div>
          {/*right half*/}
          <div className="w-1/2 h-full flex items-center justify-center">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                        
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App


{/*User action (type/select)
        ↓
Event handler in InputBox
        ↓
Calls function received via props
        ↓
App.jsx updates state (useState)
        ↓
React re-renders
        ↓
Updated props sent to InputBox
        ↓
UI updates on screen*/} 