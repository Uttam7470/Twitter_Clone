import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Body from './components/Body'
import {Toaster} from 'react-hot-toast'

function App() {
 
  return (
    <>
  
      <Body />
      <Toaster />

    </>
  )
}

export default App
