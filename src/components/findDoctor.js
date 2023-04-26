import React from 'react'
import {doctor} from './data'
import {FaFacebookF,FaInstagram} from 'react-icons/fa';
const FindDoctor = () => {
  return (
    <div>
      <div className=' flex items-center flex-col justify-center'>
      <div className=' p-6 m-2 border border-gray-100 shadow-md'>
        <h1 className='text-sky-950 text-5xl font-bold p-2 m-2'>Expericenced Doctors</h1>
        <h3 className='text-black text-xl font-semibold  font-sans p-2 m-2'>Our doctors are specialized in respective fields and take utmost care of their<br/>
        patients service of our doctors are well-appeciated widely.</h3>
      </div>
      <div className='grid grid-flow-row md:grid-cols-3 max-w-full grid-cols-1  justify-center items-center p-3 m-3 gap-5 '>
        {doctor && doctor.map((data , index)=> (
            <div className=' border border-gray-300 shadow-md hover:border-gray-900'>
            <div key={data.id} className=' flex flex-col justify-center items-center'>
               <img src={data.Image} alt='' className=' h-32 w-32 object-cover rounded-full m-4' />
               <h1 className='text-sky-800 font-semibold text-2xl p-3'>{data.name}</h1>
               <h3 className='font-semibold text-lg'>{data.degree}</h3>
               <h3 className='font-semibold text-lg text-sky-950'>{data.special}</h3>
               <h4 className='font-normal p-3 m-2 text-lg'>{data.description}</h4>
               <ul className=' flex flex-row items-center justify-center gap-4 p-5 m-4'>
               <li>
                <a href="https://www.facebook.com/maldamedical">
                <FaFacebookF className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-blue-700'/>
               </a>
               </li>
               <li>
               <a href="https://www.instagram.com/maldamedical/"><FaInstagram className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-pink-600'/></a>
                 </li>
               </ul>
            </div>
            
           </div>
          
        ))}
      </div>
      </div>
    </div>
  )
}

export default FindDoctor
