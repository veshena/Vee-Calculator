import './App.css';
import Calculator from './components/Calculator';



function App() {

  return (
    <div className="Page">

      <h1 className='title'>
        MY CALCULATOR
      </h1>

      <div>
      <Calculator />
      </div>
    </div>
  )
}

export default App