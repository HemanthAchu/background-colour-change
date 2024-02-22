import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RandomColour() {
    const[random,setrandom] =useState()
    
    const colours=()=>{

   const ans =Math.random().toString().substring(2, 8)
   const final = `#${ans}`
       setrandom(final)
console.log(final);

    }

   
  return (
    <div><center><Link to={'/'}><button className='btn btn-danger mt-5 mb-4'>back</button></Link>  </center> 
    
    <div className='w-100 d-flex justify-content-center align-items-center ' style={{height:"500px",backgroundColor:random}}>

        <button  onClick={colours}  className='btn btn-primary'>RandomColour</button>
    </div>

    
    
     </div>
  )
}
