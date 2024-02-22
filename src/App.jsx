
import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
const [color,setcolor] = useState('')

const reds =()=>{
setcolor('red')
}
const green =()=>{
  setcolor('green')
  }
  const blue =()=>{
    setcolor('blue')
    }

  return (
    <div style={{ width:"100%",height:"100vh", backgroundColor:color }} className='d-flex justify-content-center align-items-center'>
    <button onClick={reds} className='btn btn-light m-3'> Red</button>
    <button onClick={green} className='btn btn-light m-3'> green</button>
    <button onClick={blue} className='btn btn-light m-3'> blue</button>
    <Link to={'/random'}><button className='btn btn-light m-3'>Ranbom Colour</button></Link>
    </div>
  )
}

export default App
