import React from 'react';
import {motion} from 'framer-motion'
const CenterLogin = () => {
  return (
    <div className='md:relative flex flex-col'>
    <img src="/images/new.jpeg" className=' w-full h-full md:blur-sm'/>
    <div className='md:absolute md:top-44 md:left-1/3 flex justify-center items-center backdrop-blur-2xl md:w-1/3 md:h-1/2 w-full'>
        <div>
        <div className=' p-2 flex justify-center items-center' >
					<a href="/"><img src="/images/logo.png" alt="" className='md:w-48 w-24'/></a>
		</div>
        <div><h1 className=' font-bold text-2xl text-sky-950'>Centre Login</h1></div>
        <div>
            <form className='flex flex-col justify-center items-center'>
                <div className=' flex flex-col justify-between gap-8'>
            <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='text' 
            placeholder={`Enter Centre Login Id `} required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>
            <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='password' 
            placeholder={`Enter Password `} required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>
            </div>
            <motion.div className=' flex item-center justify-center' ><motion.button whileTap={{scale : 0.75}} type='submit' className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>Login</motion.button></motion.div>
       
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CenterLogin
