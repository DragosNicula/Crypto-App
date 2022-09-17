import React from 'react'
import ReactDOM from 'react-dom/client'
import UserInput from './userInput.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render (
  <div style={{position: 'absolute', left: '45%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: "center"}}>
    <h1>Crypto Graph App</h1>
    <UserInput />
  </div>
)
