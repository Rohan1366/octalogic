import React from 'react'
import { Link , Outlet } from 'react-router-dom'
const HomePage = () => {
  return (
   <>
    <div className='flex w-full'>
    <div className='w-28 flex flex-col text-center mt-14 '>
         <img
            className="mx-auto h-16 w-auto rounded-lg mb-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZu9YYxGZL8zDlqs6Nd3ifIFrOrk2AD9upvffkzxF38w&s"
            alt="Your Company"
          />
         <Link to='overview' className='mt-8 shadow-xl p-2 bg-red-400 ml-3 text-sm font-sans rounded-lg'> <span class="material-symbols-outlined">
           widgets
           </span>  Overview</Link>
         <Link to='courses' className='mt-6 mt-8 shadow-xl p-2 bg-gray-500 ml-3 text-sm font-sans rounded-lg'>  
         <span class="material-symbols-outlined w-6 h-6" >
          music_note
          </span>
           Courses</Link>
         
        </div>

        <div className='h-full ml-9 bg-slate-50 pl-9 w-11/12'>
            <Outlet/>
        </div>
     
    </div>
   </>
  )
}

export default HomePage