import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MyWork from './pages/MyWork.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'myWork',
        element: <MyWork/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'about',
        element: <About/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
