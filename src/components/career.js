import React from 'react'
import {motion} from 'framer-motion'

const Career = () => {
  return (
    <div>
        <div className='relative'>
            <img src='/images/career.jpg' className=' w-full h-96' />
            <div className='absolute top-40 left-9 font-semibold text-white bg-gray-800
            p-4 m-4 border rounded-lg text-2xl'><p>MMC Career</p></div>
        </div>
        <div className=' flex justify-center items-center text-sky-950 font-semibold text-2xl p-3 m-2'>Application Form</div>
      <form className=' flex flex-col justify-center items-center'>
        <div className=' grid grid-flow-row md:grid-cols-2 justify-evenly gap-8'>
        <div className=' flex flex-col items-center justify-center'><p>Enter Applicant's Name</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Applicant's name`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Father's Name</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Father's name`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Position Applied for</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Applied position`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Phone Number</p><input type='tel' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Phone number`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Email id</p><input type='email'className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Email id`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Highest Qualification</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Qualification`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Local Address</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Address(local)`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Date-of-Birth</p><input type='date' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Date-of-birth`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Enter Gender</p><input type='text' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`Gender`} required/></div>
        <div className=' flex flex-col items-center justify-center'><p>Upload your Cv</p><input type='file' className=' h-10 w-80 rounded-md border border-gray-400 placeholder:text-gray-800 hover:border-gray-800 hover:shadow-lg placeholder:p-3' placeholder={`upload your cv`}/></div>
        </div>
       <motion.div className=' flex w-full items-center justify-center'>
        <motion.button whileTap={{scale : 0.75}} type='submit' className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>submit</motion.button>
       </motion.div>
      </form>
     
    </div>
  )
}

export default Career
