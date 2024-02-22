import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import RandomColour from './Random Colour.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/>}/>
        <Route path='/random' element={ <RandomColour/>}/>
        
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
