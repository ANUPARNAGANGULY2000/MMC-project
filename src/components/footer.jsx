import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {GoTriangleRight} from 'react-icons/go';
import {GrMail} from 'react-icons/gr';
import {AiFillPhone} from 'react-icons/ai';
import { NavLink,BrowserRouter } from 'react-router-dom';

const  Footer = () => {
  return (
    <div className=' p-4 m-4 flex justify-between flex-col'>
      <div className=' flex md:flex-row flex-col justify-evenly gap-3 shadow-lg border border-gray-200 p-5'>
        <div className=' md:w-1/4 w-full'>
            <span>
                <h1 className=' text-xl font-semibold shadow-md'>Malda Medical Centre Pvt Ltd</h1>
            </span>
            <br/>
            <br/>
            <span>
                <h3>MALDA MEDICAL CENTRE PRIVATE LIMITED. Better Care in Better Ways</h3>
            </span>
            <br/>
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

        <div className=' flex flex-col justify-center items-center md:w-1/4 w-full'>
            <div>
                  <span><h1  className=' text-xl font-semibold shadow-md'>Quick Links</h1></span>
                  <br/>
                  <br/>
            </div>
    
            <div>
                <BrowserRouter>
                    <ul className=' flex flex-col justify-between items-baseline gap-4'>
                        <li className=' flex justify-center items-center gap-2 '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Home</NavLink></li>
                        <li className=' flex justify-center items-center gap-2 '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>About Us</NavLink></li>
                        <li className=' flex justify-center items-center gap-2  '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Services</NavLink></li>
                        <li className=' flex justify-center items-center gap-2  '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Online Services</NavLink></li>
                        <li className=' flex justify-center items-center gap-2  '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Media</NavLink></li>
                        <li className=' flex justify-center items-center gap-2 '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Career</NavLink></li>
                        <li className=' flex justify-center items-center gap-2 '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Academics</NavLink></li>
                        <li className=' flex justify-center items-center gap-2 '><GoTriangleRight className=' text-indigo-800'/><NavLink to='/home'>Contact Us</NavLink></li>
                    </ul>
                </BrowserRouter>
                
            </div>
        </div>

        <div className=' md:w-1/4 w-full'>
                <div>
                        <span><h1  className=' text-xl font-semibold shadow-md'>Contact Info</h1></span>
                        <br/>
                        <br/>
                 </div>
                 <div>
                    <p>3/150, K J Sanyal Road, Mokdumpur, English Bazar,Malda-732103</p>
                 </div>
                <br/>
                 <div>
                    <p className=' flex justify-center items-center gap-2 '><AiFillPhone 
                        className=' h-6 w-7 text-indigo-500'/>
                        <a href="tel:+9434052889 ">9434052889</a>/<a href="tel:+9434052889 ">9434052889</a>
                    </p>
                 </div>
                 <div>
                    <p className=' flex justify-center items-center gap-2 '>
                        <GrMail className=' h-6 w-7 text-red-600'/><a href="mailto: maldamedical01@gmail.com ">maldamedical01@gmail.com</a>
                    </p>
                 
                 </div>
        </div>

        <div className=' md:w-1/4 w-full' >
                 <div>
                        <span><h1  className=' text-xl font-semibold shadow-md'>Opening Hours</h1></span>
                        <br/>
                        <br/>
                
                  </div>
                  <div className=' flex flex-col items-center justify-center gap-3'>
                    <div>
                        <h1 className=' underline p-2'>OPD Chambers</h1>
                        <div className=' flex justify-between gap-10 item-center'>
                             <p>Monday - Sunday</p>
                             <p>8am - 8pm</p> 
                        </div>
                    </div>
                    <div>
                        <h1 className=' underline p-2'>CT Scan</h1>
                        <div className=' flex justify-between gap-9 item-center'>
                             <p>Monday - Sunday</p>
                             <p>24x7</p> 
                        </div>
                    </div>
                    <div>
                        <h1 className=' underline p-2'>Indoor Services</h1>
                        <div className=' flex justify-between gap-9 item-center'>
                             <p>Monday - Sunday</p>
                             <p>24x7</p> 
                        </div>
                     </div>
                     <div>
                        <h1 className=' underline p-2'>Diagnostic Departments</h1>
                        <div className=' flex justify-between gap-10 item-center'>
                             <p>Monday - Sunday</p>
                             <p>7:00am - 7:00pm</p> 
                        </div>
                     </div>

                  </div>
      </div>
      </div>
      <div className='bg-gradient-to-br
                    from-blue-400 to-sky-950 h-11 flex justify-center items-center w-full'>
            <span><p className=' text-base text-white'>Copyright 2023 Malda Medical Centre Pvt Ltd | All rights reserved | Made with heart by Grow Brand Tech</p></span>
      </div>
    </div>
  )
}

export default Footer;
