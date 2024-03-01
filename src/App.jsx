import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import Footnote from './components/UI/Footnote'

function App() {
  return (
    <div>
    <Navbar />
      <Outlet/>
    <Footnote />
      </div>
  )
}

export default App
