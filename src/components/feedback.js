import React from 'react'
import {MdLocationPin,MdPhoneIphone,MdEmail,MdPermIdentity,MdPhoneEnabled,MdMessage} from 'react-icons/md';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {motion } from 'framer-motion';


const Feedback = () => {
  return (
    <div className=' font-display'>
      <div className=' flex items-center flex-col justify-center w-full font-display'>
      
      <img src='/images/feedback.jpg' className=' w-full h-96' />
      </div>
      
    <div className=' flex flex-col justify-center items-center'>
    <h1 className='text-xl p-4 m-3'>Welcome to MMC . We remain thankful for your time to tell us about your visit. Your valuable information and suggestions shall be accorded the highest confidentiality and only be used for improvement of our serves and standards of care.</h1>
    
    <form>
        <div className='flex flex-col'>
            <p className='text-2xl'>Feedback for the centre</p>
            <div >
            <div >
<input class="form-check-input" value="KOLKATA" type="radio" name="flexRadioDefault" id="kolkata"/>
<label class="form-check-label" for="chanchol">
Chanchol
</label>
<div >
<input class="form-check-input" value="MALDA" type="radio" name="flexRadioDefault" id="malda"/>
<label class="form-check-label" for="malda">
MALDA
</label>
</div>
</div>
<div className=' flex md:flex-row flex-col'>
<div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><MdPermIdentity/>  <input type='text' placeholder={`Enter name here `} required className=' placeholder:text-black '/></div>
<div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><MdPhoneEnabled/> <input type='text' placeholder='Enter Phone Number' required className='placeholder:text-black  '/></div> 
<div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><HiOutlineMailOpen/><input type='email' placeholder='Enter your email' required  className='  placeholder:text-black '/></div> 
           </div>
           <div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row gap-2'><MdMessage className=' m-2'/><textarea placeholder='Enter Message'  cols="30" rows="6" value="Feedback" className=' placeholder:text-black '/></div>
           <motion.div ><motion.button whileTap={{scale : 0.75}} type='submit' className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>submit</motion.button></motion.div>
                    
</div>
        </div>
    </form>
    </div>

    
   
   
    </div>
  )
}

export default Feedback
