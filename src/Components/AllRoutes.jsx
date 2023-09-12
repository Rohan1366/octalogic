import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<HomePage/>}/>
        </Routes>

    </div>
  )
}

export default AllRoutes