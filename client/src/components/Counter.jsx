import React ,{useState} from 'react'

const Counter = () => {
    const [Counter,SetCounter]=useState(0);
 
    const incrementCounter = () => {
        SetCounter(Counter + 1);
    }
    const decrementCounter = () => {
        if (Counter > 0) {
            SetCounter(Counter - 1);
        }
    }
    const resetCounter = ()=>{
        SetCounter(0);
    }

    return (
    <>
       <div style={{display:'flex',justifyContent:'center','alignContent':'center'}}>
       <h1>Counter Value</h1>
       </div>
   
       <div style={{display:'flex',justifyContent:'center','alignContent':'center'}}>
       <h1>{Counter}</h1>
       </div>

       <div style={{display:'flex',justifyContent:'center','alignContent':'center'}}>
       <div>
        <button onClick={incrementCounter}>Increase</button>
       </div>
       <div>
        <button onClick={decrementCounter}>Decrease</button>
       </div>
       <div>
        <button onClick={resetCounter}>Reset</button>
       </div>
       </div>

    </>
  )
}

export default Counter