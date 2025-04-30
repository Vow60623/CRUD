import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Register from './components/Register'
import Update from './components/Update'
import Delete from './components/Delete'


function App() {
  

  return (
    <div>
      <h1 style={{color:'cyan', border:'3px solid white'}}>THIS IS CRUD FUNCTION</h1>
      <Register/><br></br>
      <View/><br/>
      <Update/><br />
      <Delete/>
    </div>
  )
}

export default App
