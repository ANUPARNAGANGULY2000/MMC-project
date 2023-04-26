import React from 'react'
import {academic} from './academicdata'

const Academic = () => {
  return (
    <div>
      <div className=' flex items-center flex-col justify-center w-full'>
      
      <img src='/images/academic.jpg' className=' w-full h-96' />
      
     
      <div className='grid grid-flow-row md:grid-cols-3 max-w-full grid-cols-1  justify-center items-center p-3 m-3 gap-5 py-4 '>
        {academic && academic.map((data , index)=> (
            <div className=' border border-gray-300 shadow-md hover:border-gray-900 py-3'>
            <div key={data.id} className=' flex flex-col justify-center items-center'>
               <h1 className='text-sky-800 font-semibold text-2xl p-3'>{data.heading}</h1>
               <h3 className='font-semibold text-lg'>start from: {data.date}</h3>
               <h3 className='font-semibold text-lg text-sky-950'>{data.description}</h3>
               
               
            </div>
            
           </div>
          
        ))}
      </div>
      </div>
    </div>
  )
}

export default Academic
