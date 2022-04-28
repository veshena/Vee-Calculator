import './App.css';
import Calculator from './components/Calculator';
import { useState } from "react";


function App() {

  const [result, setResult] = useState("");


  const click = (event) => {
    // console.log(event.target?.name)
    setResult(result.concat(event.target?.name))
  }

  const clear = () => {
    // console.log(clear)
    setResult("");
  }

  const equal = () => {
    setResult(eval(result).toString())
  }

  return (
    <div className="Page">
      
      <h1 className='title'>
        MY CALCULATOR
        </h1>
      
      <div className='box'>
        <input type="text" className="numbers" value={result} />
        <div className="cal">

          <div>
            <button onClick={clear} className='btn-clear'>C</button>
            <button name="/" onClick={click} className='btn-opp'>/</button>
            <button name="*" onClick={click} className='btn-opp'>*</button>
            <button name="+" onClick={click} className='btn-opp'>+</button>
            <button name="-" onClick={click} className='btn-opp'>-</button>
          </div>

          <div>
            <button name="9" onClick={click} className='btn'>9</button>
            <button name="8" onClick={click} className='btn'>8</button>
            <button name="7" onClick={click} className='btn'>7</button>
          </div>

          <div>
            <button name="6" onClick={click} className='btn'>6</button>
            <button name="5" onClick={click} className='btn'>5</button>
            <button name="4" onClick={click} className='btn'>4</button>
          </div>

          <div>
            <button name="3" onClick={click} className='btn'>3</button>
            <button name="2" onClick={click} className='btn'>2</button>
            <button name="1" onClick={click} className='btn'>1</button>
          </div>

          <button name="0" onClick={click} className='btn'>0</button>
          <button name="." onClick={click} className='btn'>.</button>
          <button onClick={equal} className='btn-opp'>=</button>

        </div>
      </div>
    </div>
  )
}

export default App