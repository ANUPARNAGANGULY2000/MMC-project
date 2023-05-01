import React, { useState } from 'react';
import {Home,About,Contact,Media,PatientLogin,CenterLogin,FindDoctor,IPD,OPD,Diagnosis,Career,Academic} from './index'
import {BrowserRouter,NavLink ,Route, Routes } from "react-router-dom";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube,FaAmbulance} from 'react-icons/fa'
import {TbPhoneCall} from 'react-icons/tb';
import {motion} from 'framer-motion';
import {AiOutlineMenu} from 'react-icons/ai';
const Header = () => {
  const [delayHandler, setDelayHandler] = useState(null)
  const [isMenu ,setIsMenu ] = useState(false);
  let activeStyle = {
    textDecoration: "underline",
    textDecorationColor:"black",
    color:"blue"
  };

  const [open , setOpen] = useState(false);
  const [service,setService] = useState(false);
  const handleMouseEnter = event => {
    setDelayHandler(setTimeout(() => {
      setOpen(false)
    }, 2000))
};

const handleMouseEnternew = event => {
  setDelayHandler(setTimeout(() => {
    setService(false)
  }, 2000))
}

  return (
    <div>
      
      <div className='bg-gradient-to-br
                    from-blue-400 to-sky-950 h-14 flex justify-evenly items-center w-full rounded-bl-full'>
            <div className='md:flex hidden items-center justify-center gap-3'>
              <TbPhoneCall className=' text-white text-lg'/>
              <p className=' text-white font-display'>Emergency : 9434052889</p>
            </div>
            <div className='md:flex hidden items-center justify-center gap-3'>
            <FaAmbulance className=' text-white text-lg'/>
              <p className=' text-white font-display'>Ambulance & Enquiry : 8170007650</p>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <ul className=' flex flex-row items-center justify-center gap-4'>
                <li>
                <a href="https://www.facebook.com/maldamedical">
                <FaFacebookF className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-blue-700'/>
                </a>
                </li>

                <li>
                <a href="https://twitter.com/"> <FaTwitter className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-blue-400'/></a>
                </li>
                <li>
                <a href="https://www.instagram.com/maldamedical/"><FaInstagram className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-pink-600'/></a>
                </li>

                <li>
                <a href="https://www.linkedin.com/"><FaLinkedinIn className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-blue-900'/></a>
                </li>

                <li>
                <a href="https://www.youtube.com/"><FaYoutube className=' h-6 w-7 rounded-full shadow-lg border border-l-neutral-200 bg-slate-100 text-red-600'/></a>
                </li>
              </ul>
                
            </div>
      </div>
    <div className=' p-1'>
		<div className=' w-full p-3 px-0 m-auto'>
			<div className=' md:flex justify-between text-center md:pt-2 p-2 gap-5'>
				<div className=' p-2 flex justify-center items-center' >
					<a href="/"><img src="/images/logo.png" alt="" className='max-w-[230px]'/></a>
				</div>
				<div className=' md:flex items-center justify-center p-2 hidden' >
					<img src="/images/iconfirst.png" alt="" className='max-w-[30px] m-2' />
					<p className=' pl-3 text-base text-black m-0 font-display'>Call to schedule your appointment!<br/>
					<p className='text-sky-700 font-display'>8170007650 </p></p>
				</div>
				<div className=' md:flex items-center justify-center p-2 hidden'>
					<img src="/images/icon-2.png" alt="" className=' max-w-[30px] m-2'/>
					<p className=' pl-3 text-base font-display text-black m-0'>3/150, K J Sanyal Road, Mokdumpur, English<br/>
					<p className='text-sky-700 font-display'>Bazar,Malda-732103 </p></p>
				</div>
        <div className=' md:hidden hidden  items-center justify-center gap-3 p-2'>
              <TbPhoneCall className='text-lg m-2'/>
              <p className=' pl-3 text-base font-display text-black m-0'>Emergency :<strong> 9434052889</strong></p>
            </div>
            <div className=' md:hidden hidden items-center justify-center gap-3 p-2'>
            <FaAmbulance className='m-2 text-lg text-gray-800'/>
              <p className=' pl-3 text-base font-display text-black m-0'>Ambulance & Enquiry :<strong>8170007650</strong></p>
            </div>
				<div className='p-2 md:flex justify-center items-center hidden'>
					<img src="/images/logo-2.png" alt="" className=' max-w-[170px]' />
				</div>
			</div>
		</div>
	</div>
    

  <div className='w-full'>
      <BrowserRouter >
          <div className=' w-full p-2 flex justify-center items-center gap-4 relative ' >
           
              <ul className=' hidden md:flex w-full items-center justify-center gap-10 text-lg font-display capitalize '>
                  <li className=' hover:text-blue-700'><NavLink to='/' style={({ isActive }) =>isActive ? activeStyle : undefined}>Home</NavLink></li>
                  <li className=' hover:text-blue-700'><NavLink to='/about' style={({ isActive }) =>isActive ? activeStyle : undefined}>About us</NavLink></li>
                  <li className=' hover:text-blue-700'>
                  <motion.div className=' relative' >
                   
                   <button  onMouseEnter={() => setService(true)}
                           
                           onMouseLeave={handleMouseEnternew}
                   >Service</button>
                    
                   
                   </motion.div> 
                  </li>
                  <li className=' hover:text-blue-700'>
                   <motion.div className=' relative' >
                   
                    <button  onMouseEnter={() => setOpen(true)}
                            
                            onMouseLeave={handleMouseEnter }
                    >Online Booking</button>
                     
                    
                    </motion.div> 
                    </li>
                  <li className=' hover:text-blue-700'><NavLink to='/media' style={({ isActive }) =>isActive ? activeStyle : undefined}>Media</NavLink></li>
                  <li className=' hover:text-blue-700'><NavLink to='/career'style={({ isActive }) =>isActive ? activeStyle : undefined}>Career</NavLink></li>
                  <li className=' hover:text-blue-700'><NavLink to='/academics' style={({ isActive }) =>isActive ? activeStyle : undefined}>Academics</NavLink></li>
                  <li className=' hover:text-blue-700'><NavLink to='/contactus' style={({ isActive }) =>isActive ? activeStyle : undefined}>Contact us</NavLink></li>
                  <li className=' hover:text-blue-700'><NavLink to='/doctorfind' style={({ isActive }) =>isActive ? activeStyle : undefined}>FIND A DOCTOR</NavLink></li>
              </ul>
              <div className=' block md:hidden ml-auto cursor-pointer'>
                    <AiOutlineMenu className=' text-3xl text-gray-950' onClick={() => setIsMenu(!isMenu)}/>
                </div>
                {isMenu &&  (
                    <motion.div
                    initial={{opacity:0 , translateX:-50}}
                    animate={{opacity:1 ,translateX:50}}
                    exit={{opacity:0,translateX:-50}}
                    
                     className=' flex flex-col w-72 -top-24 right-28 bg-gradient-to-br
                     from-blue-400 to-sky-950 gap-7 justify-evenly items-center rounded-lg p-5 absolute z-20'>
                        
                        <NavLink to='/home' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)}>Home</NavLink>
                        <NavLink to='/about' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)}>About us</NavLink>
                        <motion.div className=' relative' >
                   
                        <button  onMouseEnter={() => setService(true)}
                           
                           onMouseLeave={handleMouseEnternew}
                           className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out'
                        >Service</button>
                    
                   
                   </motion.div> 
                   <motion.div className=' relative' >
                   
                   <button  onMouseEnter={() => setOpen(true)}
                           
                           onMouseLeave={handleMouseEnter }
                           className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-display duration-100 ease-in-out'
                           onClick={()=> setIsMenu(false)}
                   >Online Booking</button>
                    
                   
                   </motion.div> 
                   <NavLink to='/media' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)} onChange={()=> setIsMenu(false)}>Media</NavLink>
                  <NavLink to='/career'style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)} onChange={()=> setIsMenu(false)}>Career</NavLink>
                 <NavLink to='/academics' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)} onChange={()=> setIsMenu(false)}>Academics</NavLink>
                <NavLink to='/contactus' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)} onChange={()=> setIsMenu(false)}>Contact us</NavLink>
                <NavLink to='/doctorfind' style={({ isActive }) =>isActive ? activeStyle : undefined} className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)} onChange={()=> setIsMenu(false)}>FIND A DOCTOR</NavLink>
                    </motion.div>

                )}
              <div>

     </div>
          </div>

          
          {open && <motion.div 
                    initial={{opacity:0 , translateX:-50}}
                    animate={{opacity:1 ,translateX:50}}
                    exit={{opacity:0,translateX:-50}}
                    whileHover={()=>setOpen(true)}
                  className="flex flex-col w-60 absolute top-64 left-96 bg-gradient-to-br
                  from-blue-400 to-sky-950 gap-2 justify-evenly items-center rounded-lg p-3 z-30 ">
                           <NavLink to='/patientLogin' className=' text-slate-100 font-display w-full text-lg hover:bg-slate-100 hover:text-black' onClick={()=>setOpen(false)}>OPD Booking</NavLink>
                           <NavLink to='/CentreLogin'  className=' text-slate-100 font-display text-lg w-full hover:bg-slate-100 hover:text-black' onClick={()=>setOpen(false)}>Centre Login</NavLink>
    
                         </motion.div> }
            
                         {service && <motion.div 
                    initial={{opacity:0 , translateX:-50}}
                    animate={{opacity:1 ,translateX:50}}
                    exit={{opacity:0,translateX:-50}}
                  className="flex flex-col w-60 absolute top-64 left-80 bg-gradient-to-br
                  from-blue-400 to-sky-950 gap-2 justify-evenly items-center rounded-lg p-3 z-30 ">
                           <NavLink to='/ipd' className=' text-slate-100 font-display w-full text-lg hover:bg-slate-100 hover:text-black' onClick={()=>setOpen(false)}>IPD</NavLink>
                           <NavLink to='/diagnostic'  className=' text-slate-100 font-display w-full text-lg hover:bg-slate-100 hover:text-black' onClick={()=>setOpen(false)}>Dianostic</NavLink>
                           <NavLink to='/opd'  className=' text-slate-100 font-display w-full text-lg hover:bg-slate-100 hover:text-black' onClick={()=>setOpen(false)}>OPD</NavLink>
                         </motion.div> }
          <Routes>

        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contactus' element={<Contact/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/patientLogin' element={<PatientLogin/>}/>
        <Route path='/CentreLogin' element={<CenterLogin/>}/>
        <Route path='/doctorfind' element={<FindDoctor/>}/>
        <Route path='/ipd' element={<IPD/>}/>
        <Route path='/diagnostic' element={<Diagnosis/>}/>
        <Route path='/opd' element={<OPD/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/academics' element={<Academic/>}/>



      </Routes>
      
      </BrowserRouter>

      
  </div>
 </div>
 )
}


export default Header
