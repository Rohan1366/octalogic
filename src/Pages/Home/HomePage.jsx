import React from 'react'
import { Link , Outlet } from 'react-router-dom'
const HomePage = () => {
  return (
   <>
    <div className='flex w-full'>
    <div className='w-1/6 flex flex-col text-center mt-14 '>
         <img
            className="mx-auto h-20 w-auto rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZu9YYxGZL8zDlqs6Nd3ifIFrOrk2AD9upvffkzxF38w&s"
            alt="Your Company"
          />
         <Link to='overview' className='mt-8'>Overview</Link>
         <Link to='courses' className='mt-6'>Courses</Link>
         
        </div>

        <div className='w-5/6'>
            <Outlet/>
        </div>
     
    </div>
   </>
  )
}

export default HomePage