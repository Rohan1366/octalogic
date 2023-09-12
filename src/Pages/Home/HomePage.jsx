import React from 'react'

const HomePage = () => {
  return (
    <div>
      <p className='text-3xl text-zinc-700/50 font-medium'>Overview</p>
      <div className='flex'>
        <div className='shadow-lg h-32 w-64 p-3 rounded-md'>
           <div className='flex '>
               <div className=' mr-4 pr-2 pl-2 pt-2  mt-5 rounded-full bg-green-300'><span class="material-symbols-outlined " style={{fontSize:"30px"}}  >
                    group
                     </span></div>
             <div className='pt-4'><p className='text-2xl font-sans'>164</p>
        
                  <p className='font-sans text-xs font-medium text-gray-600'>Total Number of sudents</p></div>
            </div>
                 <p className='text-right mt-3 text-xs text-red-800 '>View</p>
        </div>

      </div>


      
    </div>
  )
}

export default HomePage