import React,{useState} from 'react';
import {Mediaslidernew,Doctorslide,Workexperience} from './index';
import {FaUserNurse,FaRegClock,FaAngleRight} from 'react-icons/fa';
import {MdOutlineSupportAgent} from 'react-icons/md'
import {motion } from 'framer-motion';
import CountUp from 'react-countup';

const Home = () => {

  return (
    <div>
        <Mediaslidernew/>
    <div>
    
    <div className=' flex md:flex-row flex-col justify-evenly gap-7 p-6 m-5'>

      
      <div className=' flex flex-col border border-gray-300 shadow-2xl md:w-1/3 w-full rounded-sm'>
       
        <div><FaUserNurse className=' text-7xl  text-sky-950 m-8'/></div>
        <div>
          <p className='text-lg font-thin' >24 Hours Service</p>
          <p className=' text-sky-950 text-2xl font-bold p-1 m-1'>Online Appoinment</p>
        </div>
        <div><p className='text-lg font-thin p-2 m-2'>Get ALl time support for emergency.
          We have introduced the principle of family medicine.</p></div>
        <div>
          <motion.div>
            <motion.button whileTap={{scale : 0.75}}  className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>Book Appoinment</motion.button>
          </motion.div>
        </div>
      </div>
      <div className=' flex flex-col border border-gray-300 shadow-2xl md:w-1/3 w-full rounded-sm'>
       
        <div><FaRegClock className=' text-7xl  text-sky-950 m-8'/></div>
        <div>
          <p className='text-lg font-thin'>Timing schedule</p>
          <p className=' text-sky-950 text-2xl font-bold p-1 m-1'>Working Hours</p>
        </div>
        
          <div className=' flex justify-evenly text-lg font-thin p-1 m-1'>
            <p>Sun - Wed :</p>
            <p>8:00 - 17:00</p>
          </div>
          <div className=' flex justify-evenly text-lg font-thin p-1 m-1'>
            <p>Sun - Wed :</p>
            <p>8:00 - 17:00</p>
          </div>
          <div className=' flex justify-evenly text-lg font-thin p-1 m-1'>
            <p>Sun - Wed :</p>
            <p>8:00 - 17:00</p>
          </div>
        </div>
      
      <div className=' flex flex-col border border-gray-300 shadow-2xl md:w-1/3 w-full rounded-sm'>
       
        <div><MdOutlineSupportAgent className=' text-7xl  text-sky-950 m-8 flex md:justify-start md:items-start justify-center items-center'/></div>
        <div>
          <p className='text-lg font-thin'>Emergency Cases</p>
          <p className=' text-sky-950 text-2xl font-bold p-1 m-1'>8170007650</p>
        </div>
        <div><p className='text-lg font-thin p-2 m-2'>Get all time support for emergency.We have introduced the principle of family medicine.
          Get Conneted with us for any urgency .</p></div>
      </div>
    </div>
    </div>

    <div className=' flex md:flex-row flex-col items-start justify-start'> 
      <div className=' md:w-1/2 w-full'><img src="/images/mmc-left.png" alt='/' /></div>
      <div className=' flex flex-col md:w-1/2 w-full'>

      
         <div className=' flex md:items-start md:justify-start items-center justify-center'><p className='text-sky-950 text-5xl font-bold p-2 m-2'>About MMC</p></div>
        <div className=' md:w-2/3 w-full'><p>MALDA MEDICAL CENTRE PRIVATE LIMITED 
          is one of the leading healthcare service
         providers of Malda its surrounding districts. 
         The company was incorporated in the year of 1989 with the core 
         intention to provide healthcare services .</p></div>
    
        <div className=' flex md:items-start md:justify-start items-center justify-center flex-col'><p className='text-sky-700 
        text-2xl font-bold p-2 m-2'>Our Branches</p>
        <p className=' p-1 m-1'>MMC Nursing Home & Diagnostic Chanchal<br/></p>
          <p>GNK MMC Diagnostic, Harishchandrapur</p>
        </div>
       <div className=' flex md:items-start md:justify-start items-center justify-center flex-col'><p className='text-sky-700 text-2xl font-bold p-2 m-2'>Our technical collaboration with</p></div>
        <div><ul>
         <li className=' flex md:items-start md:justify-start items-center justify-center'><FaAngleRight className=' text-sky-700'/><p>Diagnostic Centre[PPP Unit], Gazole Rural Hospital</p></li>
        <li  className=' flex md:items-start md:justify-start items-center justify-center'><FaAngleRight className=' text-sky-700'/><p>Nirnay, Chanchal, Malda</p></li>
        <li  className=' flex md:items-start md:justify-start items-center justify-center'><FaAngleRight className=' text-sky-700'/><p>Square Polyclinic & Diagnostic, Kolkata</p></li>
        </ul></div>
        <div>
          <motion.div className=' flex md:items-start md:justify-start items-center justify-center shadow-lg'>
            <motion.button whileHover={{scale : 1.15}}  className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>IPD</motion.button>
             <motion.button whileHover={{scale : 1.15}}  className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>DIAGNOSTIC</motion.button>
               <motion.button whileHover={{scale : 1.15}}  className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>OPD</motion.button>
          </motion.div>
        </div>
        </div>
      </div>
      <div className=' flex justify-evenly items-center bg-gradient-to-br
                    from-blue-400 to-sky-950 w-full'>
        <div className=' flex flex-col justify-center items-center w-full'>
          <div className=' flex p-2 m-2'><CountUp start={40} end={100} duration={20} className=' md:text-7xl text-xl text-white font-bold'/><p className=' text-white font-bold text-lg'>k</p></div>
          <div><p className=' text-white font-bold md:text-xl text-lg p-1 m-2'>Happy People</p></div>
        </div>
        <div className=' flex flex-col justify-center items-center w-full'>
           <div className=' flex p-2 m-2'><CountUp start={0} end={700} duration={100} className=' md:text-7xl text-xl text-white font-bold'/><p className=' text-white font-bold text-lg'>k</p></div>
          <div><p className=' text-white font-bold md:text-xl text-lg p-1 m-2'>Surgery Comepleted</p></div>
        </div>
        <div className=' flex flex-col justify-center items-center w-full'>
           <div className=' flex p-2 m-2'><CountUp start={0} end={40} duration={5} className=' md:text-7xl text-xl text-white font-bold'/><p className=' text-white font-bold text-lg'>k</p></div>
          <div><p className=' text-white font-bold md:text-xl text-lg p-1 m-2'>Expert Doctors</p></div>

        </div>
        <div className=' flex flex-col justify-center items-center w-full'>
           <div className=' flex p-2 m-2'><CountUp start={0} end={20} duration={2} className=' md:text-7xl text-xl text-white font-bold'/><p className=' text-white font-bold text-lg'>k</p></div>
          <div><p className=' text-white font-bold md:text-xl text-lg p-1 m-2'>Worldwide Branch</p></div>

        </div>
      </div>
      <div>
        <Workexperience/>
      <Doctorslide/>
      </div>
      
    </div>

   
  )
}

export default Home
