import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../Pages/Courses'
import HomePage from '../Pages/Home/HomePage'
import Login from '../Pages/Login/Login'
import Overview from '../Pages/Overview'
import Register from '../Pages/Register/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<HomePage/>}>
            <Route path='overview' element={<Overview/>}/>
            <Route path='courses' element={<Courses/>}/>
            </Route>
            
        </Routes>

    </div>
  )
}

export default AllRoutes