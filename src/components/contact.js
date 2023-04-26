import React from 'react'
import {MdLocationPin,MdPhoneIphone,MdEmail,MdPermIdentity,MdPhoneEnabled,MdMessage} from 'react-icons/md';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {motion } from 'framer-motion';


const Contact = () => {
  return (
    <div>
      <div className=' flex items-center flex-col justify-center w-full'>
      
      <img src='/images/contact.jpg' className=' w-full h-96' />
      </div>
      
    <div className=' flex md:flex-row flex-col justify-evenly p-3 m-3 border border-gray-300 shadow-lg w-full'>
    <div className=' flex border border-gray-300 md:shadow-lg shadow-md justify-center items-center md:w-1/3 w-full'>
        <div><MdLocationPin className=' h-16 w-16 text-sky-950 m-2 '/></div>
         <div className=' flex flex-col'>
            <p className=' text-sky-950 text-2xl p-1 font-semibold'>Address</p>
            <p className='p-1 m-1'>3/150, K J Sanyal Road, Mokdumpur, English Bazar,Malda-732103</p>
        </div>
        </div>
        <div className='flex border border-gray-300 md:shadow-lg shadow-md justify-center items-center md:w-1/3 w-full'>
        <div><MdPhoneIphone className=' h-16 w-16 text-sky-950 m-2 '/></div>
         <div className=' flex flex-col'>
            <p className=' text-sky-950 text-2xl p-1 font-semibold'>Contact Number</p>
            <p className='p-1 m-1'><a href="tel:+9434052889 ">9434052889</a>/<a href="tel:+9434052889 ">9434052889</a></p>
        </div>
        </div>
        <div className='flex border border-gray-300 md:shadow-lg shadow-md justify-center md:w-1/3 w-full'>
        <div><MdEmail className=' h-16 w-16 text-sky-950 m-2 '/></div>
         <div className=' flex flex-col justify-center items-center p-1 m-1'>
            <p className=' text-sky-950 text-2xl p-1 font-semibold'>Email</p>
            <p className='p-1 m-1'><a href="mailto: maldamedical01@gmail.com ">maldamedical01@gmail.com</a></p>
        </div>
    </div>
    </div>

    <div>
        <form className='flex flex-col justify-center items-center w-full'>
            <div className='flex md:flex-row flex-col justify-center items-center'>
           <div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><MdPermIdentity/>  <input type='text' placeholder={`Enter name here `} required className=' placeholder:text-black '/></div>
           <div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><MdPhoneEnabled/> <input type='text' placeholder='Enter Phone Number' required className='placeholder:text-black  '/></div> 
           <div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row justify-center items-center gap-2'><HiOutlineMailOpen/><input type='email' placeholder='Enter your email' required  className='  placeholder:text-black '/></div> 
           </div>
           <div className=' p-4 m-4 border border-gray-400 shadow-md rounded-md hover:border-gray-500 hover:shadow-xl flex flex-row gap-2'><MdMessage className=' m-2'/><textarea placeholder='Enter Message'  cols="40" rows="6" value="Message" className=' placeholder:text-black '/></div>
           <motion.div ><motion.button whileTap={{scale : 0.75}} type='submit' className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>submit</motion.button></motion.div>
        </form>
    </div>
    <div className='w-full md:flex flex-col justify-center items-center pt-6 m-4 rounded-md hidden'>
       
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.231488975728!2d88.13966677488501!3d24.99224887784343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafe8b4bead9c3%3A0x5cde03e0dd037108!2sMMC%2CMalda%20(%20Malda%20Medical%20Centre%20Pvt%20Ltd%20)!5e0!3m2!1sen!2sin!4v1681914486859!5m2!1sen!2sin" width="1000" height="600" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className='w-full md:hidden justify-center items-center pt-6 m-4 rounded-md flex'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.2314889757263!2d88.13966677525146!3d24.992248877843505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fafe8b4bead9c3%3A0x5cde03e0dd037108!2sMMC%2CMalda%20(%20Malda%20Medical%20Centre%20Pvt%20Ltd%20)!5e0!3m2!1sen!2sin!4v1682493817397!5m2!1sen!2sin" width="400" height="300" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
   
    </div>
  )
}

export default Contact
