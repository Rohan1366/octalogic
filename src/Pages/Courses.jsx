import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Courses = () => {
  const [state,setState]=useState([])
  const[col, setCol]=useState({
    text:"Active",
    bgColor: "green"
  })
  useEffect(()=>{
    fetch("http://localhost:3000/courses")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setState(data)
    })

  },[])
  function handleEdit(){
      setCol({
        text:"Closed"
      })
  }
  function handleForm(){
    let answer = window.prompt("Are You Sure want to delete this product ? ");
  }
  return (
    <div className='h-screen ml-6'>
      <p className='text-3xl text-zinc-700/50 font-medium mt-12 mb-10'>Overview</p>
      <div className='mt-10 mb-12'>
      <p className='text-1xl text-zinc-700/50 font-medium'>COURSE LIST</p>
       <div className='inset-y-0 right-0 text-right mr-6'>
       <input placeholder='Search' className='rounded-lg '/>
       
       </div>
      </div>

      <table className='shadow-lg w-full bg-white pb-6 mr-12'>
        <thead className=''>
          <tr className=' border-b-2 '>
            <th className='pt-9 pb-4 '>Name</th>
            <th className='pt-9 pb-4'>Description</th>
            <th className='pt-9 pb-4'>Instructor</th>
            <th className='pt-9 pb-4'>Instrument</th>
            <th className='pt-9 pb-4'>Day Of Week</th>
            <th className='pt-9 pb-4'>#Students</th>
            <th className='pt-9 pb-4'>Price</th>
            <th className='pt-9 pb-4'>Status</th>
            <th className='pt-9 pb-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          
          {
            state.map((ele,index)=>{
             return(
              <tr className='border-b-2' key={index}>
              <td className='text-center pb-4 '>{ele.name}</td>
              <td className='text-center'>{ele.description}</td>
              <td className='text-center'>{ele.instructor}</td>
              <td className='text-center'>{ele.instrument}</td>
              <td className='text-center'>{ele.date}</td>
              <td className='text-center'>{ele.students}</td>
              <td className='text-center'>{ele.fees}</td>
              <td className='text-center'><div className=''>{col.text}</div></td>
              <td className='text-center'>
              <div className="relative w-full lg:max-w-sm">
            <select className="w-8 p-2.5 text-gray-500 bg-white outline-none appearance-none focus:border-indigo-600">
                <option >**</option>
                <option >Edit Course</option>
                <option onClick={handleEdit}>Close Course</option>
                <option>Archive Course</option>
            </select>
        </div>

              </td>

            </tr>
             )
            })
          }
        </tbody>
      </table>

     <div className='inset-y-0 right-0 text-right mr-6 mt-32'>
     <button className='bg-red-200 p-4 shadow-lg rounded-md' onClick={handleForm}>+  Add Courses</button>
     </div>


    </div>
  )
}

export default Courses