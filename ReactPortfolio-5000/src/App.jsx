import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footnote from './components/Footnote'

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
