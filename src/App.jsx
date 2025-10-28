import './App.css'
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 0 ? count - 1 : 0 )
  
  return (
    <>
    <h1>Count:{count}</h1>
     <button onClick={increment}>Add</button>  
     <button onClick={decrement}>Minus</button> 
    
    </>
  )
}

export default App
