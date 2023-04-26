import React from 'react'
import {Doctorslide} from './index'

const About = () => {
  return (
    <div>
       <div className=' flex md:flex-row flex-col items-start justify-start w-full h-auto p-3 m-4'> 
       
            
             <div className=' flex flex-col md:w-1/2 w-full m-3 p-3'>

      
                <div className=' flex md:items-baseline items-center justify-center md:justify-start p-2 m-2'><p className='text-sky-950 text-5xl font-bold p-2 m-2'>About MMC</p></div>
                 <div className='flex item-start justify-start p-2 m-2 md:w-2/3 w-full'><p className=' text-xl text-sky-700 font-semibold'>Celebrating the glorious 30 years’ successful and dedicated journey to the service of mankind...</p></div>
    
                 <div className=' flex  items-center justify-evenly p-2 m-1 flex-col'><p className='font-normal text-gray-600
                  text-xl align-middle'><strong>MALDA MEDICAL CENTRE PRIVATE LIMITED </strong> is one of the leading healthcare service providers of Malda its surrounding districts. The company was incorporated in the year of 1989 with the intention to provide healthcare services to the people its home and surrounded districts at affordable cost. The company had started its operation with IPD care, and shortly expanded to provide diagnostic services under one roof. Malda Medical Centre Pvt Ltd took many initiatives to provide the best healthcare services in its zones. The company has been grown up gradually, and currently serves all sorts of Diagnostic Service, In-patient Services including Intensive Care Unit, High Dependent Unit, Neonatal care Unit, Day-Care Specialty Services and multispecialty OPD Services. The company possesses the state-of-art medical technology equipped with ultramodern medical devices. In-patient division of MALDA MEDICAL CENTRE PRIVATE LIMITED provides 24x7 emergency services, comprehensive post operative cares and round-the-clock patient services with qualified doctors and paramedical personnel.</p>
                  <p className=' p-1 m-1 text-xl text-sky-700 font-semibold'>WE ARE TRYING TO BE MORE THAN A HOSPITAL TO PROVIDE THE BEST HEALTHCARE SERVICES FOR YOU AND YOUR LOVED ONES.</p>
                <p  className=' font-normal text-gray-600
                  text-xl' >Our objectives are Quality Services, Transparency and Patients’ Safety and to provide extensive medical care at affordable price.</p>
                 </div>
      
             </div>
             <div className=' md:w-1/2 w-full md:relative flex justify-center items-center flex-col'><img src="/images/mmgabout.jpg" alt='/' className='md:absolute md:z-[1] md:top-14 md:left-16' />
            <div className='w-full flex justify-center items-center'><img src="/images/mmgabout2.jpg" alt='/' className='md:absolute md:z-[2] md:top-96 md:left-52' /></div>  
             </div>
             </div>
            <Doctorslide/>
             </div>
  )
}

export default About
