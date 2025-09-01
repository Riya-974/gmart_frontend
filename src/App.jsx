import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Main from './compoments/Main'
import Home from './pages/Home'
import Service from './pages/Service'
import Portofolio from './pages/Portofolio'
import Category from './pages/Category'
import Contact from './pages/Contact'
 import { ToastContainer } from 'react-toastify';
import Detail from './pages/Detail'
const App = () => {

  const browserrouter=createBrowserRouter([

    {
      path:"/",
      element:<Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/service",
          element:<Service/>
        },
        {
          path:"/portfolio",
          element:<Portofolio/>
        },

         {
          path:"/product/:id",
          element:<Category/>
        },

         {
          path:"/contact",
          element:<Contact/>
        },

         {
          path:"/products/:id",
          element:<Detail/>
        },
      ]
    }

  ])
  return (
    <div className='bg-white w-[100vw] min-h-screen'>

      <RouterProvider router={browserrouter}/>
      <ToastContainer/>
      
    </div>
  )
}

export default App
