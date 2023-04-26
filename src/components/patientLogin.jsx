import React from 'react';
import {motion} from 'framer-motion'
const PatientLogin = () => {
  return (
    <div className='md:relative flex flex-col'>
    <img src="/images/new.jpeg" className=' w-full h-full md:blur-sm'/>
    <div className='md:absolute md:top-24 md:left-44 flex justify-center items-center backdrop-blur-2xl md:w-3/4 md:h-3/4 w-full h-full '>
        <div>
        <div className=' p-2 flex md:flex-row flex-col justify-center items-center' >
					<a href="/"><img src="/images/logo.png" alt="" className='md:w-48 w-24'/></a>
		    </div>
        <div><h1 className=' font-bold text-2xl text-sky-950'>OPD Booking</h1></div>
        <div>
            <form className='flex flex-col justify-center items-center'>

              <div className='md:grid md:grid-flow-row md:grid-cols-3 flex flex-col w-full justify-center items-center'>
                

                 <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md
                   hover:border-black hover:shadow-xl flex flex-row justify-center items-center 
                    gap-2 '><input input type='text' placeholder={`Enter Patient Name `} required
                   className=' placeholder:text-gray-900 font-semibold
                  hover:placeholder:text-black bg-transparent '></input>
                </div>

                <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
                hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='email' 
                placeholder={`Enter Email Id `} required className=' placeholder:text-gray-900 font-semibold
                hover:placeholder:text-black bg-transparent '></input>
                </div>
               

                <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
                hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='number' 
                placeholder={`Enter Patient Age `} required className=' placeholder:text-gray-900 font-semibold
                hover:placeholder:text-black bg-transparent '></input></div>

                  <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
                    hover:shadow-xl flex flex-row justify-center items-center gap-2 '>
                    <select name="Gender" className=' placeholder:text-gray-900 font-semibold
                    hover:placeholder:text-black bg-transparent '>
                        <option value="">Gender*</option>
                                    
                          <option value="7">Male</option>
                        
                          <option value="8">Female</option>
                          </select>
                      </div>


              <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='tel' 
            placeholder={`Enter Contact Number`} required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>
            <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '>
            <select name="doctor_department" className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '>
                <option value="">Doctor Department*</option>
                            
									<option value="7">GYNAECOLOGIST</option>
								
									<option value="8">NEPHROLOGIST</option>

									<option value="9">PHYSIOTHERAPIST</option>
									 	
									<option value="10">SURGEON</option>
									 
									<option value="11">ENT MICROSURGEON</option>
									
									<option value="12">GYNAECOLOGIST &amp; INFERTILITY SPECIALIST</option>
									 
									<option value="13">GENERAL &amp; LAPAROSCOPIC SURGEON</option>
									 
									<option value="19">ORTHOPEDIC SURGEON</option>
									 
									<option value="20">DENTAL SURGEON</option>
									 
									<option value="21">UROSURGEON</option>
									 	
									<option value="22">CARDIOLOGIST</option>
									 	
									<option value="23">GENERAL PHYSICIAN</option>
									 	
									<option value="24">GASTROENTEROLOGIST</option>
									 
									<option value="25">NEURO PHYSICIAN</option>
									 
									<option value="26">DERMATOLOGIST</option>
									 
									<option value="27">PAEDIATRICIAN</option>
							</select>
              </div>
             
              <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '>
            <select name="Doctor's name" className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '>
                <option value="">Select Doctor*</option></select>
              </div>

              <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><p>Enter booking time</p><input input type='time' 
            placeholder='Enter Booking Date' required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>

            <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><p>Enter booking date</p><input input type='date' 
            placeholder='Enter Booking Date' required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>


              <div className=' p-4 m-4 border border-gray-600 shadow-md rounded-md hover:border-black 
            hover:shadow-xl flex flex-row justify-center items-center gap-2 '><input input type='text' 
            placeholder={`Enter Address `} required className=' placeholder:text-gray-900 font-semibold
             hover:placeholder:text-black bg-transparent '></input></div>

              </div>
            
             <motion.div className=' flex item-center justify-center' ><motion.button whileTap={{scale : 0.75}} type='submit' className=' rounded-3xl p-3 m-3 border border-gray-950 text-white bg-gradient-to-br
                    from-blue-400 to-sky-950 px-6'>Confirm Booking</motion.button></motion.div>
       
            </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PatientLogin